import { IPlanType } from '@/types/type';
import PlanCard from '../shared/PlanCard';
import { getPlansData } from '@/lib/plan';



const Planner = async() => {
const allPlans = await getPlansData()

    return (
        <div className=" max-w-11/12 mx-auto my-10">
          <div className="my-5 text-center md:text-left">
            <h2 className="text-[#ffffff] font-extrabold text-2xl font-oswald">THE LIBRARY</h2>
            <p className="text-gray-400 text-md">Twelve lifts covering every major muscle group.</p>
          </div>
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-3 space-y-5">
            {
              allPlans.map((plan:IPlanType) => <PlanCard key={plan.id} plan={plan}/>)
            }
          </div>
      </div>
    );
};

export default Planner;