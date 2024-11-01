"use client";
import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Student from "./components/Student";
import axios from "../../../../utils/api";
import Assigned from "./components/Assigned";
import NotAssigned from "./components/NotAssigned";
const page = () => {
  const [student, setStudent] = useState([]);
 ;

 
  let assigned = student?.map((item) => ({
    ...item, 
    subscriptions: item.subscriptions.filter(
      (m) => m.teacherName !== "Yet to assign"
    ), 
  }));

  
  let notAssigned = student?.map((item) => ({
    ...item, 
    subscriptions: item.subscriptions.filter(
      (m) => m.teacherName == "Yet to assign"
    ), 
  }));

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const { data } = await axios.get(`/api/v1/students/`);

        let filteredStudent = data?.data?.students.filter(
          (item) => item.subscriptions.length > 0
        );
       
        setStudent(filteredStudent);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchTeacherData();
  }, []);
  return (
    <div className="w-full">
      <Tabs>
        <TabList>
          <Tab>All </Tab>
          <Tab>Assigned </Tab>
          <Tab>UnAssigned </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Student student={student} />
          </TabPanel>
          <TabPanel><Assigned assigned={assigned} /></TabPanel>
          <TabPanel><NotAssigned notAssigned={notAssigned} /></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default page;



"use client";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
} from "@chakra-ui/react";

const Assigned = ({ assigned }) => {
  return (
    <div>
      {assigned.length>0?<TableContainer className="!rounded-md">
        <Table variant="simple" size={"sm"}>
          <Thead className="bg-gray-200 h-10">
            <Tr>
              <Th>No.</Th>
              <Th>Student Name</Th>
              <Th>Grade</Th>
              <Th>Tutor Assigned</Th>
              <Th>Paid Amount</Th>
              <Th>Status</Th>
              <Th>No. of classes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assigned.map((stud, studIndex) => (
              <>
                {stud.subscriptions.map((subscription, index) => (
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>
                      <Box display="flex" gap="2px" alignItems="center">
                        <Image
                          src={stud.profileImage}
                          alt={`${stud.firstname} ${stud.lastname}`}
                          boxSize="40px"
                          objectFit="cover"
                          borderRadius="full"
                        />
                        {stud.firstname} {stud.lastname}
                      </Box>
                    </Td>

                    <Td>{stud.grade}</Td>
                    <Td> {subscription.teacherName} </Td>
                    <Td> Empty </Td>
                    <Td>
                      {" "}
                      {subscription.subscriptionDetails.status ==
                      "notstarted" ? (
                        <button className="px-2 py-1 rounded-md bg-[#E9F3E9] text-[#228B22] flex items-center gap-2">
                          {" "}
                          <span className="p-2 rounded-full h-2 w-2 bg-[#228B22]"></span>{" "}
                          ACTIVE
                        </button>
                      ) : (
                        <button className="px-2 py-1 rounded-md bg-[#FFD2CF] text-[#FF4437] flex items-center gap-2">
                          {" "}
                          <span className="p-2 rounded-full h-2 w-2 bg-[#FF4437]"></span>{" "}
                          INACTIVE
                        </button>
                      )}{" "}
                    </Td>

                    <Td> {subscription.schedule.length} </Td>
                  </Tr>
                ))}
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>: <div>Opps... Nothing here </div>}
    </div>
  );
};

export default Assigned;
