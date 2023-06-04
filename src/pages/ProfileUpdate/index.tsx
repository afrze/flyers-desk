import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { doc, updateDoc } from "firebase/firestore";
import firebaseConfig from "../../services/firebaseConfig.service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ProfileUpdate = () => {
  const db = firebaseConfig.db;
  const activeUser = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    employeeId: "",
    reportingTo: "",
  });

  const cookies = new Cookies();
  const accessToken = cookies.get("user_access_token");
  const profileStatus = cookies.get("profile_status");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }

    if (profileStatus === "completed") {
      navigate("/");
    }
  }, [accessToken, profileStatus, navigate]);

  const changeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    try {
      const submitProfile = doc(db, "users", activeUser.data.uid);
      console.log(
        "checking output from profileupdate",
        submitProfile,
        activeUser.data.uid
      );

      await updateDoc(submitProfile, {
        profileStatus: "completed",
        employeeId: values?.employeeId,
        reportingTo: values?.reportingTo,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="p-5 border">
        <div>
          <Text type="h2">Welcome To, Flyers Soft</Text>
          <Text>Please Update Your Profile</Text>
        </div>
        <form action="" className="flex flex-col">
          <div className="py-4">
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
