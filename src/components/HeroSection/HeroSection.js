import Header from "../Header/Header";
import HeroSectionContent from "./HeroSectionContent/HeroSectionContent";

export default function HeroSection() {
	return (
		<section className="hero-section w-[100%] max-w-[100%] h-[642px] sm:h-[531px] md:h-[763px] bg-cover bg-no-repeat">
			<div className="div bg-bgColor w-[100%] h-[100%]">
				<div className="h-[69px] w-[100%] sm:h-[55px] md:bg-headerBg md:h-[35px]">
					<Header />
					<HeroSectionContent />
				</div>
			</div>
		</section>
	);
}
