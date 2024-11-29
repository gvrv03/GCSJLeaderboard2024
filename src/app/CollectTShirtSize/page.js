// pages/index.js
"use client";
import Statistics from "@/components/Statistics";
import TshirtCollect from "@/components/TshirtCollect";
import Image from "next/image";

export default function CollectTShirtSize() {
  return (
    <div className="container   m-auto flex  flex-col md:gap-5 gap-0">
      
      <img  loading="lazy" className="  border rounded-md w-full h-full" src="/Rewards.jpeg" />
      {/* <img  loading="lazy" className="  border rounded-md w-full h-full" src="/SizeChart.jpeg" /> */}
      <Statistics visible="" />
      <TshirtCollect data={StuData} />
    </div>
  );
}

const StuData = [
  {
    Name: "Yash Lanjewar",
    Email: "yashlanjewar77@gmail.com",
  },
  {
    Name: "Nandini karemore",
    Email: "nandinikaremore4@gmail.com",
  },
  {
    Name: "Kartavya Deepak Dabhekar",
    Email: "kartavyadabhekar307@gmail.com",
  },
  {
    Name: "Sahil Harishchandra Nagpure",
    Email: "sahilnagpure1610@gmail.com",
  },
  {
    Name: "Tarun Surajlal Maraskolhe",
    Email: "maraskolhetarun90@gmail.com",
  },
  {
    Name: "Arnavi Rahul Khade",
    Email: "arnavikhade7@gmail.com",
  },
  {
    Name: "Mohit Pawan Deotare",
    Email: "mohitdeotare9@gmail.com",
  },
  {
    Name: "Nutan Mundle",
    Email: "mundlenutan@gmail.com",
  },
  {
    Name: "Tejashri Narendra Apturkar",
    Email: "tejashriapturkar0@gmail.com",
  },
  {
    Name: "Ansh Rajesh Lakhe",
    Email: "lakheansh0@gmail.com",
  },
  {
    Name: "Anshul Raju Harne",
    Email: "anshulharne07@gmail.com",
  },
  {
    Name: "Gayatri Bhanudas Rande",
    Email: "gayatrirande9552@gmail.com",
  },
  {
    Name: "Rujuta Vijay Bramhe",
    Email: "rujuta.gcoen@gmail.com",
  },
  {
    Name: "Falgun Machhindra Nikhare",
    Email: "shubhnikhare1@gmail.com",
  },
  {
    Name: "Rohit Wagh",
    Email: "rohit052005wagh@gmail.com",
  },
  {
    Name: "Prachi Maroti Rathod",
    Email: "prachirathod5077@gmail.com",
  },
  {
    Name: "Radhika Pimple",
    Email: "radhikapimplae@gmail.com",
  },
  {
    Name: "Niharika Nagpurkar",
    Email: "nanagpurkar@gcoen.ac.in",
  },
  {
    Name: "Shreyash Ganesh Katgube",
    Email: "shreyash.mech02@gmail.com",
  },
  {
    Name: "Sanika Gotmare",
    Email: "gotmaresanika@gmail.com",
  },
  {
    Name: "Sagar Ravi Paithankar",
    Email: "sagarpaithankar13@gmail.com",
  },
  {
    Name: "Aasawari Bhondge",
    Email: "aasawari.b18@gmail.com",
  },
  {
    Name: "Shubhankar Lalit Warkade",
    Email: "computerram768@gmail.com",
  },
  {
    Name: "Gaurav Nandkumar Narnaware",
    Email: "gnnarnaware3112003@gmail.com",
  },
  {
    Name: "Ayush Avinash Nafdey",
    Email: "ayushnafdeygdsc@gmail.com",
  },
  {
    Name: "Durgesh Kale",
    Email: "durgeshkale808@gmail.com",
  },
  {
    Name: "Suniti Rajesh Bhavargade",
    Email: "bhavargadesuniti@gmail.com",
  },
  {
    Name: "Anshul Kuthe",
    Email: "anshul.kuthe51@gmail.com",
  },
  {
    Name: "Darshan Arun Narad",
    Email: "naraddarshan@gmail.com",
  },
  {
    Name: "Divya chavham",
    Email: "divyachavhan180@gmail.com",
  },
  {
    Name: "Sahil Sunil Shrikhande",
    Email: "shrikhande0011@gmail.com",
  },
  {
    Name: "Vinay Khushal Titarmare",
    Email: "vinaytitarmare420@gmail.com",
  },
  {
    Name: "Zoya Salahuddin",
    Email: "zoyasalahuddin0605@gmail.com",
  },
  {
    Name: "Satvik Yewale",
    Email: "satvikgdgc@gmail.com",
  },
  {
    Name: "Uruj Shaikh",
    Email: "urujshaikh5@gmail.com",
  },
  {
    Name: "Shreyash Kailas Ambure",
    Email: "shreyash8112005@gmail.com",
  },
  {
    Name: "Unnati tadas",
    Email: "tadasunnati@gmail.com",
  },
  {
    Name: "Anshu Chole",
    Email: "choleanshu23@gmail.com",
  },
  {
    Name: "Ruchika Bambal",
    Email: "ruchikabambal@gmail.com",
  },
  {
    Name: "Pranay Sangolkar",
    Email: "pranay.sangolkarr@gmail.com",
  },
  {
    Name: "Shreya Arvind Deogade",
    Email: "shreyadeogade138@gmail.com",
  },
  {
    Name: "zishan deshmukh",
    Email: "zishandeshmukh475@gmail.com",
  },
  {
    Name: "Kanak Manish Mate",
    Email: "kanakmate@gmail.com",
  },
  {
    Name: "Roshan Kumar Singh",
    Email: "roshankumarsingh899o@gmail.com",
  },
  {
    Name: "ATHARVA NANDKISHOR KAMDE",
    Email: "atharvakamde258258@gmail.com",
  },
  {
    Name: "Mayank Gongal",
    Email: "mayankgongalcloud@gmail.com",
  },
  {
    Name: "Kripalini Pramod Gudadhe",
    Email: "kripalinigudadhe3@gmail.com",
  },
  {
    Name: "Tanmay Sanjay Jirekar",
    Email: "tanmaygdgc@gmail.com",
  },
  {
    Name: "Shiwang Pandey",
    Email: "shiwangpandey2003@gmail.com",
  },
  {
    Name: "Raghav Joshi",
    Email: "raghavgcoen2005@gmail.com",
  },
  {
    Name: "Akhilesh Selvaraj Reddiyar",
    Email: "reddiyarvislamiske@gmail.com",
  },
  {
    Name: "Saksham Shukla",
    Email: "sakshamshukla1505@gmail.com",
  },
  {
    Name: "Radhika Shrawan Varma",
    Email: "radhika09042006@gmail.com",
  },
  {
    Name: "Minakshi Bhoyar",
    Email: "minakshibhoyar2005@gmail.com",
  },
  {
    Name: "Manav bhajan",
    Email: "manavbhajan1@gmail.com",
  },
  {
    Name: "Rupak Kundu",
    Email: "rupaklol572@gmail.com",
  },
  {
    Name: "Devika Jeevan Samudre",
    Email: "djsamudre@gcoen.ac.in",
  },
  {
    Name: "Ronit Sunil Gajbhiye",
    Email: "ronitgajbhiye7498@gmail.com",
  },
  {
    Name: "Arya Chandrashekhar Rahate",
    Email: "rahatearya285@gmail.com",
  },
  {
    Name: "Yash Hemant Waghe",
    Email: "yashwaghe777@gmail.com",
  },
  {
    Name: "HRISHIKESH DHANDE",
    Email: "hrishidhande@gmail.com",
  },
  {
    Name: "Gaurav Bijwe",
    Email: "gabijwe@gmail.com",
  },
  {
    Name: "Yashsah Meshram",
    Email: "yashashmeshram8@gmail.com",
  },
  {
    Name: "Ameya Farkade",
    Email: "ameyafarkade576@gmail.com",
  },
  {
    Name: "Tushar Gajanan Borkar",
    Email: "tusharborkar905@gmail.com",
  },
  {
    Name: "Chinmayi Ghatbandhe",
    Email: "chinmayig2311@gmail.com",
  },
  {
    Name: "Shreya Anil Chore",
    Email: "shreyachore130@gmail.com",
  },
  {
    Name: "Shivani Sadanand Sawargave",
    Email: "shivanisawargave04@gmail.com",
  },
  {
    Name: "Varun Meshram",
    Email: "varunmeshram24@gmail.com",
  },
  {
    Name: "Hansuja Jambhale",
    Email: "hansuja275@gmail.com",
  },
  {
    Name: "Anshu Siddharth Mate",
    Email: "anshumate30@gmail.com",
  },
  {
    Name: "Janhavi Soyam",
    Email: "janhaviysm@gmail.com",
  },
  {
    Name: "Devashri Zile",
    Email: "dzile1979@gmail.com",
  },
  {
    Name: "Khomendra Dahake",
    Email: "khomendradahakegcoen@gmail.com",
  },
  {
    Name: "Harsh Diware",
    Email: "harshdiware10@gmail.com",
  },
  {
    Name: "Apurv Chandrashekhar Hatmode",
    Email: "apurvhatmode2003@gmail.com",
  },
  {
    Name: "Vibhuti Vivek Wanjari",
    Email: "wanjarivibhuti44@gmail.com",
  },
  {
    Name: "Shreyash Nukesh Moon",
    Email: "shreyashmoon17@gmail.com",
  },
  {
    Name: "Utkarsha Singhal",
    Email: "karmakreatives24@gmail.com",
  },
  {
    Name: "Ishad Pande",
    Email: "ishadpande48@gmail.com",
  },
];
