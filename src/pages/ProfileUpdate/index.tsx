import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { doc, updateDoc } from "firebase/firestore";
import firebaseConfig from "../../services/firebaseConfig.service";
import { useSelector } from "react-redux";

const ProfileUpdate = () => {
  const activeUser = useSelector((store: any) => store.data);
  const [values, setValues] = useState({
    employeeId: "",
    reportingTo: "",
  });

  const changeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    const submitProfile = doc(firebaseConfig.db, "users", activeUser?.uid);
    await updateDoc(submitProfile, {
      profileStatus: "completed",
      employeeId: values?.employeeId,
      reportingTo: values?.reportingTo,
    });
    try {
    } catch (error) {}
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-full border-[#f8f9fa] p-5 border-2 sm:w-1/2">
        <div>
          <Text type="h2" className="text-primary-500 py-2">
            Welcome To, Flyer's Soft
          </Text>
          <Text type="p" className="text-gray-500 py-2">
            Please Update Your Profile
          </Text>
        </div>
        <form action="" className="flex flex-col">
          <div className="py-4">
            <div className="py-4">
              <Input
                className="w-full p-3 focus:outline-none"
                value={values?.employeeId}
                name="employeeId"
                type="text"
                placeholder="Employee ID ID"
                onChange={changeHandler}
              />
            </div>
            <div className="py-4">
              <Input
                className="w-full p-3 focus:outline-none"
                value={values?.reportingTo}
                name="reportingTo"
                type="text"
                placeholder="Reporting To ID"
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center items-center border border-primary-500 rounded-lg my-3">
              <Button className="py-2 px-4" onClick={() => updateProfile()}>
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
