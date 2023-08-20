
export const MainPage = () => {


  return (
    <div>
      <h1>Welcome to the college administration website</h1>
      <h2 className="font-bold border text-2xl	">Written by David Horvitz</h2>
      <div>
        <h2>
          Here, you have access to a range of administrative tasks related to students, courses, lecturers, and study materials. Our user-friendly interface allows you to effortlessly manage the college's educational ecosystem.
        </h2>
        <div className="text-left font-bold border">

          Available Actions:
        </div>
        <div className="text-left ">
          <span className="font-bold" > View :</span>
          <span> Obtain comprehensive information on students, courses, lecturers, and study materials.</span>
        </div>
        <div className="text-left ">
          <span className="font-bold" > Add : </span>
          <span>  Seamlessly integrate new entries for students, courses, lecturers, and study materials.</span>
        </div>
        <div className="text-left ">
          <span className="font-bold" > Update :</span>
          <span>  Modify existing details to ensure accurate records.</span>
        </div>
        <div className="text-left ">
          <span className="font-bold" > Delete :</span>
          <span>Remove outdated information as  necessary.</span>
        </div>
        <div className="text-left ">
          <span className="font-bold" >  Tables :</span>
        </div>
         

        Tables:

        Students Table:
        View a list of enrolled students, their respective courses, and class assignments.

        Courses Table:
        Explore the courses offered, along with the assigned lecturer and class information.

        Lecturers Table:
        Discover the educators in our college, their teaching assignments, and associated courses.

        Study Materials Table:
        Access study materials linked to specific courses, ensuring enhanced learning opportunities.

        Information Available:

        For Students:
        Courses Enrolled In
        Corresponding Class Details
        For Courses:
        Assigned Lecturer
        Scheduled Class
        Get Started:
        Log in to our user-friendly portal to manage, organize, and optimize the college's educational resources effectively.

        At the College Administration Website, we are committed to providing you with a seamless and efficient experience for all your administrative needs. Thank you for choosing us to be your partner in education management.
      </div>
    </div>
  );
};
