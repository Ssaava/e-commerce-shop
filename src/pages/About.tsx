import TickedList from "@/components/TickedList";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <section className="section flex justify-center py-20 gap-4 items-center">
        <div className="flex-1">
          <Card className="bg-secondary-500 p-2 rounded-none w-fit text-gray-00 mb-4">
            WHO WE ARE
          </Card>
          <p className="text-[40px] font-semibold leading-tight pb-3">
            Kinbo - largest electronics retail shop in the world.
          </p>
          <p className="pb-4 text-gray-700 text-[16px]">
            Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
            vestibulum risus, ac tincidunt diam lectus id magna. Praesent
            maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui
            aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
          </p>

          <div>
            <TickedList subject="Great 24/7 customer services." />
            <TickedList subject="600+ Dedicated employe." />
            <TickedList subject="50+ Branches all over the world." />
            <TickedList subject="Over 1 Million Electronics Products" />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/images/about-us-image.png"
            alt="Client with our worker"
            width={648}
          />
        </div>
      </section>

      <hr className="my-4 border-gray-300 w-full" />

      <section className="section ">
        <p>Our core team members</p>
        <div>
          <Card>
            <img src="/images/team-member-1.jpg" alt="Team Member 1" />
            <div></div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default About;
