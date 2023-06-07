import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import firebaseConfig from "../../services/firebaseConfig.service";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const db = firebaseConfig.db;
  const activeUser = useSelector((state: any) => state.data);
  // const navigate = useNavigate();

  const [values, setValues] = useState({
    employeeId: "",
    reportingTo: "",
  });

  const changeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    try {
      const submitProfile = doc(db, "users", activeUser?.uid);

      await updateDoc(submitProfile, {
        profileStatus: "completed",
        employeeId: values?.employeeId,
        reportingTo: values?.reportingTo,
      });

      const docRef = doc(db, "users", activeUser?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap?.data());
      }

      // const user_uid = localStorage.getItem("user_uid");
      // const profile_status = localStorage.setItem("profile_status", activeUser?.data.profileStatus);

      // if (activeUser?.data.profileStatus === "completed") {
      //   navigate("/");
      //   return;
      // }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="p-5 border">
        <div>
          <Text type="h2">Welcome To, Flyer,s Soft</Text>
          <Text type="p">Please Update Your Profile</Text>
        </div>
        <form action="" className="flex flex-col">
          <div className="py-4">
            {/* <div>
              <label className="mr-3" htmlFor="employeeId">
                Employee ID
              </label>
            </div> */}
            <div className="py-4">
              <Input
                value={values?.employeeId}
                name="employeeId"
                type="text"
                placeholder="Employee ID FEC****"
                onChange={changeHandler}
              />
            </div>
            <div className="py-4">
              <Input
                value={values?.reportingTo}
                name="reportingTo"
                type="text"
                placeholder="Reporting To FEC****"
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center items-center border border-primary-500 rounded-lg">
              <Button
                className="py-2 px-4"
                onClick={submitHandler}
                type="button"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
