import { Outlet } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import MembershipInstructions from "./MembershipInstruction";


function Membership() {
  return (
    <PageWrapper>
      <section className="container mt-3">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Prospective Members</h2>
          </div>
          <Outlet />
          <MembershipInstructions />



        </div>
      </section>
    </PageWrapper>
  )
}

export default Membership
