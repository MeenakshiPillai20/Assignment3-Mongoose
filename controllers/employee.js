const {Employee} = require("../models/employee")

// insert operation
const saveManyEmployeesData = async function(req,res){
  const employeeData = req.body;

  try {
    const employeeObj = employeeData.map((val) => {
     return({
      firstName: val.firstName,
      lastName:val.lastName,
      salary:val.salary,
      department:val.department,
      lastCompany:val.lastCompany,
      lastSalary:val.lastSalary,
      overallExp:val.overallExp,
      contactInfo:val.contactInfo,
      yearGrad:val.yearGrad,
      gradStream:val.gradStream
     })
    })
   const insertManyResponse= await Employee.insertMany(employeeObj);
   console.log("insertManyResponse",insertManyResponse) 
   return res.status(200).send({success: insertManyResponse});
  } 
  catch (error) {
     console.log("Error occur in saving data",error)
     return res.status(200).send({message:"something went wrong"})
  }
}



const getQuery1Data = async function(req,res){
  try {
   const queryResponse= await Employee.find();
   return res.status(200).send(queryResponse);
  } catch (error) {
     console.log("Error occur in saving data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}



const getQuery2Data = async function(req,res){
  const query = {salary:{$gt:30000}}
  try {
   const queryResponse= await Employee.find(query);
   return res.status(200).send(queryResponse);
  } catch (error) {
     console.log("Error occur in saving data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}




const getQuery3Data = async function(req,res){
  const query = { overallExp: { $gt: 2 } }
  try {
   const queryResponse= await Employee.find(query);
   return res.status(200).send(queryResponse);
  } catch (error) {
     console.log("Error occur in saving data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}




const getQuery4Data = async function(req,res){
  const query = { yearGrad: { $gt: 2015 }, overallExp: {$gt: 1}}
  try {
   const queryResponse= await Employee.find(query);
   return res.status(200).send(queryResponse);
  } catch (error) {
     console.log("Error occur in saving data",error)
     return res.status(500).send({message:"something went wrong"})
  }
}





const getQuery5Data = async function(req,res){
  const filter = {salary:{$gt:70000 }};
  const update = {salary:65000}
  const changedData = {
    $set: update
  }
  try {
   const updateResponse = await Employee.updateMany(filter,changedData)
   return res.status(200).send(updateResponse);
  } catch (error) {
     console.log("Error occur in saving data",error)
     return res.status(400).send({message:"something went wrong"})
  }
}






const getQuery6Data = async function(req,res){
  const query = { lastCompany:"Y" };
  try {
    const queryResponse= await Employee.deleteMany(query);
    return res.status(200).send({"Deleted the data -> ": queryResponse});
  } 
  catch (error) {
     console.log("Error occur in deleting data",error)
     return res.status(200).send({message:"something went wrong"})
  }
}





 module.exports = {
                      saveManyEmployeesData, getQuery1Data, getQuery2Data,
                      getQuery3Data, getQuery4Data, getQuery5Data, getQuery6Data}