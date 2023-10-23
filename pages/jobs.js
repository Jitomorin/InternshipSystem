import React, { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import Header from "../components/header";
import { authContext, useAuthContext } from "../context/UserContext";
import DatePicker from "react-datepicker";
import LoadingAnimaton from "../public/loading_anim.webp";
import Image from "next/image";
import { getStops, setStops } from "../firebase/firestore";
import { firestore } from "../firebase/firebase";
import Select from "react-select";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";

const Jobs = () => {
  const  {currentUser,isUserLoading} = useAuthContext();
  const router = useRouter();
  const [amount, setAmount] = useState(1);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  var route_uid

  const getOptions = () => {
    const options = jobs.map((stop) => {
      return { value: stop.name, label: stop.name };
    });
    return options;
  };
  // const isUserLoggedIn = () => {
  //   if (authContext.user) {
  //   } else {
  //     routes.push("/login");
  //   }
  // };

  const getRoutes = async () => {
    setLoading(true);
    await firestore
      .collection("routes")
      .where("from.name", "==", selectedFrom)
      .where("to.name", "==", selectedTo)
      .get()
      .then((snapshot) => {
        const data = [];
        snapshot.docs.forEach((doc) => {
          data = doc.data();
        });

        route_uid = data.uid;
      });
    setLoading(false);
  };
  useEffect(() => {
      
    if (!isUserLoading && !currentUser) {
      console.log('something is wrong')
      console.log(isUserLoading)
      console.log(currentUser)
      router.push("/");
    } 

    const getJobsList = async () => {
      await firestore
        .collection("jobs")
        .get()
        .then(function (snapshot) {
          const data = [];
          snapshot.docs.forEach((doc) => {
            data.push(doc.data());
          });
            setJobs(data);
            console.log(data);
        });
    };
    getJobsList();
    // setToOptions(getToOptions());
    // getToOptions().then((options) => {
    //   console.log(options);
    //   setToOptions(options);
    // });
  }, [currentUser,isUserLoading]);
  const options = getOptions();
  // function timeout(delay) {
  //   return new Promise((res) => setTimeout(res, delay));
  // }
  // isUserLoggedIn();
  if (isUserLoading) {  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src={LoadingAnimaton} alt="Loading..." />
      </div>
    );
  } else {
    return (
    <div className="min-h-screen w-screen">
      <Header />
      
      <section className="my-14" id="how_section">
                {
                    jobs.length <= 0 ? (
          <div className="text-center p-10 text-4xl h-full">
            <h1>No jobs</h1>
        </div>
          ): (
            <div className="flex flex-col h-full">
          {jobs.map((job) => {
            return (
              <div key={job.uid} className="flex m-4 ">
                <div className="mr-10 flex flex-row p-3 justify-between align-middle space-x-10">
                  
                  <div className="flex flex-col">
                    <h1 className="text-2xl text-gray-400 font-bold">
                      Job Title
                    </h1>
                    <h1 className="text-2xl  font-bold">{job.title}</h1>

                    
                  </div>
                  <div className="flex flex-col ml">
                    <span>
                      <h1 className="text-gray-400 font-bold">
                       Position
                      </h1>
                      <h2>{job.position} PM</h2>
                    </span>
                    <span>
                      <h1 className="text-gray-400 font-bold">Address</h1>
                      <h2>{job.Address}</h2>
                    </span>
                    <span>
                      <h1 className="text-gray-400 font-bold">Type</h1>
                      <h2>{job.type}</h2>
                    </span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-col justify-start">
                      <h1 className="text-gray-400 font-bold">
                        Starting Salary
                      </h1>
                      <h1>{job.salary+' Ksh'}</h1>
                    </div>
                  </div>
                  

                  <div>
                    <button
                      className="bg-pink_red rounded-md p-2 text-white mx-2"
                      
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          )
                }
      </section>
    </div>
  );
  }
};

export default Jobs;
