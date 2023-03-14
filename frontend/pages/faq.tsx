import Heading from "@/components/ui/heading";
import { Accordion } from "@mantine/core";

const Faq = () => {
  return (
    <section className={"container my-20"}>
      <div className={"text-center"}>
        <Heading label={"Frequently asked question"} />
        <p className={"mt-4"}>
          Did you come here for something in particular or just general
          Riker-bashing? And blowing
        </p>
      </div>

      <Accordion
        defaultValue="customization"
        className={"mx-auto mt-10 max-w-[75%]"}
      >
        <Accordion.Item value="customization">
          <Accordion.Control className={"capitalize"}>
            is there have any option for write blog?
          </Accordion.Control>
          <Accordion.Panel>
            Did you come here for something in particular or just general
            Riker-bashing? And blowing into maximum warp speed, you appeared for
            an instant to be in two places at once. We have a saboteur aboard.
            We know you’re dealing in stolen ore. But I wanna talk about
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Faq;
