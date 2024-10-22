import Hero_Section from "./(components)/Hero-Section/page";
import About from "./(components)/About/page";
import Core_Courses from "./(components)/Core_Courses/page";
import Advance_corses from "./(components)/Advance_Courses/page";

export default function Home() {
  return (
    <>
      <Hero_Section />
      <About />
      <Core_Courses />
      <Advance_corses />
    </>
  );
}
