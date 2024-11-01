// import React from "react";

// const Text = () => {
  
//     const currentDate = new Date("2024-10-15T20:06:00"); // Simulating current time as October 15, 2024, 8:06 PM

//     // Sample data for demonstration
//     const student = [
//       {
//         subscriptions: [
//           {
//             schedule: [
//               {
//                 date: "2024-10-15",  // Course 1 ends today
//                 endTime: "19:00",    // Course 1 ended at 7:00 PM
//                 startTime: "18:00"
//               },
//               {
//                 date: "2024-10-16",  // Course 2 is scheduled for tomorrow
//                 endTime: "09:00",    // Course 2 ends at 9:00 AM tomorrow
//                 startTime: "08:00"
//               }
//             ]
//           }
//         ]
//       }
//     ];
    
//     // Function to calculate completed courses for a given schedule
//     const calculateCompletedCourses = (schedule) => {
//       return schedule.reduce((count, course) => {
//         const courseDate = new Date(course.date); // Convert course date to Date object
//         const [courseHour, courseMinute] = course.endTime.split(":").map(Number); // Convert endTime to hours and minutes
    
//         // Set the courseDate's time to the course endTime
//         courseDate.setHours(courseHour, courseMinute, 0);
    
//         // Check if the course end time has passed the current time
//         return courseDate < currentDate ? count + 1 : count; // Increment count if the course has passed
//       }, 0); // Start count at 0
//     };
    
//     // Rendering the completed courses count for each subscription
//     return (
//       <div>
//         {student.map((item, studentIndex) => (
//           item.subscriptions.map((subscription, subscriptionIndex) => (
//             <div key={`${studentIndex}-${subscriptionIndex}`} display="flex" alignItems="center" gap="2px">
//               {calculateCompletedCourses(subscription.schedule)} / {subscription.schedule.length}
//             </div>
//           ))
//         ))}
//       </div>
//     );
    
// };

// export default Text;























// install firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDjNxjiRGcUwmIBNz_0hrRRGonDZhgKTlM",
//   authDomain: "auth-97f02.firebaseapp.com",
//   projectId: "auth-97f02",
//   storageBucket: "auth-97f02.appspot.com",
//   messagingSenderId: "554436305506",
//   appId: "1:554436305506:web:1d84eb04d1cf8beeb8673b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// npm install firebase