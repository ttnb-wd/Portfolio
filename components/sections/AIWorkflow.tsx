import Container from "@/components/shared/Container";
import WorkflowHeader from "@/components/workflow/WorkflowHeader";
import WorkflowSteps from "@/components/workflow/WorkflowSteps";

export default function AIWorkflow() {
  return (
    <section
      id="workflow"
      className="bg-[#09090B] py-32"
    >
      <Container>
        <WorkflowHeader />
        <WorkflowSteps />
      </Container>
    </section>
  );
}