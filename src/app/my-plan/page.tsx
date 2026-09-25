import MyPlanSection from "@/component/PlanSection/myPlanSection";


const MyPlanPage = () => {

  return (
    <section className="max-w-11/12 mx-auto">
      {/* my plan page title */}

      <div className="text-left my-10 space-y-2">
        <h1 className="text-4xl font-bold font-oswald">My Plan </h1>
        <p className=" text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* my plan page bar, btn tab and card display section */}
      <div>
        <MyPlanSection />
      </div>
    </section>
  );
};

export default MyPlanPage;
