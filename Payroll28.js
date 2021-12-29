let empPayRollList;
let RemoveempPayRollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayRollList=getEmployeePayRollDatafromStorage();
    document.querySelector(".emp-count").textContent=empPayRollList.length;
createInnerHtml();
localStorage.removeItem('editEmp');
});

const getEmployeePayRollDatafromStorage=() =>{
    return createEmployeePayRollJSON()
}
const createInnerHtml=()=>{
 const headerHTML="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Action</th>";
    if(empPayRollList.length==0)
    {
        let innerHTML=`${headerHTML}`;
        document.querySelector('#display').remove();
        let innerHTML1=`${headerHTML}`;
        
        document.querySelector('#display').innerHTML=innerHTML1;

         return;
    }else{
    let innerHTML=`${headerHTML}`;
 for(const employeePayRollData of empPayRollList) {
    
    innerHTML=`${innerHTML}
    
        <tr>
            <td></td>
            <td>${employeePayRollData._name}</td>
            <td>${employeePayRollData._gender}</td>
            <td>${employeePayRollData._department}</td>
            <td>${employeePayRollData._salary}</td>
            <td>${employeePayRollData._startDate}</td>
            <td><button onclick=remove(${employeePayRollData._id})>Remove</button></td>
        </tr>
        `;
    }

        document.querySelector('#display').innerHTML=innerHTML;
}
    
}

const createEmployeePayRollJSON=()=>{
    let empPayRollListLocal=[
        {
            _id:1,
            _name:'Chaitra',
            _gender:'Female',
            _department:'HR',
            _salary:'500000',
            _startDate:'1 Nov 2020',
              
              },
              {
                  _id:'2',
                _name:'Suresh',
                _gender:'male',
                _department:'HR',
                _salary:'600000',
                _startDate:'1 Nov 2020',
                  
                  },
    ];

    return empPayRollListLocal;
}

const remove=(node) =>{
    let empPayrollData=empPayRollList.find(empData => empData._id==node);
    if(!empPayrollData) return;
    const index=empPayRollList.map(empData=>empData._id).indexOf(empPayrollData._id);
  empPayRollList.splice(index,1);
  document.querySelector(".emp-count").textContent=empPayRollList.length;
  if(empPayRollList.length==0){
   
    createInnerHtml();
  }else{
  createInnerHtml();
  }

  


}