const Student = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];
function PerformanceEvaluation(stu){
    const TaskCom=stu.filter(s=>s.tasksCompleted>5);
    const stuname=TaskCom.map(s=>{
    let performance;
    if (s.rating > 4.5) {
      performance = "Excellent";
    } else if (s.rating >= 3 && s.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
    return { name: s.name, performance: performance };
  });
    return stuname;
}
console.log(PerformanceEvaluation(Student));