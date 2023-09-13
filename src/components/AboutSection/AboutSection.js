export default function AboutSection() {
	return (
		<section
			className="about-section w-[100%] max-w-[100%] h-[873px] sm:h-[697px] md:h-[826px] bg-cover bg-no-repeat"
			id="about"
		>
			<div className="div relative bg-bgColor w-[100%] h-[100%]">
				<div className="container h-[100%] z-[1] sm:block sd:max-w-[440px] sm:max-w-[704px] md:max-w-[1280px] max-w-[280px] text-white md:gap-[281px] md:p-[24px] flex flex-col relative pt-[55px] sm:pt-[64px] md:pt-[104px] md:pb-[104px] sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
					<div className="md:flex md:gap-[24px]">
						<div className="title-wrapper">
							<h2 className="uppercase text-[40px] font-thin leading-[56px] tracking-[-0.04em] mb-[8px] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
								Who <span className="font-medium">we are</span>
							</h2>
						</div>
						<div className="sm:absolute sm:top-[65px] sm:w-[100%] md:left-[-414px] md:top-[120px]">
							<p className="font-extralight text-[14px] leading-[20px] w-[180px] mb-[20px] sm:ml-[auto] sm:text-[16px] sm:w-[220px] sm:mb-[16px]">
								<span className="font-normal">a team of enthusiasts</span> who are fully committed
								to the mission of creating unforgettable and extraordinary trips to the most
								beautiful parts of the Carpathians. Our goal is not just to show you the natural
								wonders of the mountains, but to provide you with a deep immersion in their magical
								atmosphere.
							</p>
							<p className="font-extralight text-[14px] leading-[20px] w-[180px] mb-[40px] sm:ml-[auto] sm:text-[16px] sm:w-[220px]">
								<span className="font-normal">We believe</span> that nature has the power to
								inspire, strengthen character and provide new perspectives. Therefore, each of our
								tours is aimed at unlocking your potential, enriching your spiritual world and
								creating unforgettable memories.
							</p>
						</div>
					</div>
					<div className="sm:absolute sm:w-[100%] sm:top-[430px] md:top-[648px] md:flex md:flex-row-reverse md:justify-between md:w-[1230px]">
						<div className="flex flex-col items-end mb-[40px] sm:items-start md:inline-block md:w-[296px]">
							<p className="font-normal text-[14px] w-[180px] uppercase sm:text-[16px] sm:w-[221px]">
								From vacationers{" "}
							</p>
							<p className="font-normal text-[14px] w-[180px] text-right uppercase sm:text-[16px] sm:w-[221px]">
								to active travelers
							</p>
							<p className="font-extralight text-[14px] sm:text-[16px] tracking-[-0.01em] sm:tracking-[0.02em] sm:w-[229px]">
								we have a tour for everyone.
							</p>
						</div>
						<p className="font-extralight text-[14px] leading-[20px] sm:max-w-[463px] sm:ml-[auto] sm:text-[16px] md:ml-[0] md:max-w-[557px]">
							<span className="font-normal">We use methods</span> that are time-tested and proven.
							Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely
							through the mysteries of these mountains.{" "}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}