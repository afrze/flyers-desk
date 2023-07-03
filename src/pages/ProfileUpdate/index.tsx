import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { useSelector } from "react-redux";
import { updateProfile } from "../../services/firebase/database.service";
import Dropdown from "../../components/Dropdown";

const ProfileUpdate = () => {
  const activeUser = useSelector((store: any) => store.user.data);
  const [values, setValues] = useState({
    employeeId: "",
    reportingTo: "",
    department: "",
  });

  const department = [
    {
      label: "selectDepartment",
      value: "Select Department",
    },
    {
      label: "frontend",
      value: "Front End",
    },
    {
      label: "backend",
      value: "Back End",
    },
    {
      label: "ui-ux",
      value: "UI / UX",
    },
    {
      label: "qa",
      value: "Quality Assurance",
    },
    {
      label: "gaming",
      value: "Game Development",
    },
    {
      label: "mobile",
      value: "Mobile Development",
    },
    {
      label: "sales",
      value: "Sales",
    },
    {
      label: "finance",
      value: "Finance",
    },
    {
      label: "infra",
      value: "Infra",
    },
    {
      label: "operations",
      value: "Operations",
    },
    {
      label: "hr",
      value: "HR",
    },
  ];

  const departmentOptions: any = [];

  department.forEach((item) => {
    departmentOptions.push(item.value);
  });

  const changeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateProfileHandler = async () => {
    try {
      updateProfile(activeUser?.uid, {
        profileStatus: "completed",
        employeeId: values?.employeeId,
        reportingTo: values?.reportingTo,
        department: values?.department,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-full border-[#f8f9fa] p-5 border-2 sm:w-1/2">
        <div>
          <Text type="h2" className="text-primary-500 py-2">
            Welcome To, Flyers Soft
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
                placeholder="Employee ID"
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
            <div className="py-2">
              <Dropdown
                className="w-full"
                label="Department"
                options={departmentOptions}
                name="department"
                value={values.department}
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center items-center border border-primary-500 rounded-lg my-3">
              <Button
                className="py-2 px-4 w-full"
                onClick={() => updateProfileHandler()}
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
