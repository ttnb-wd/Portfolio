import Container from "@/components/shared/Container";
import SkillsHeader from "@/components/skills/SkillsHeader";
import SkillsGrid from "@/components/skills/SkillsGrid";

export default function Skills() {
	return (
		<section id="skills" className="bg-[#09090B] py-32">
			<Container>
				<SkillsHeader />

				<SkillsGrid />
			</Container>
		</section>
	);
}