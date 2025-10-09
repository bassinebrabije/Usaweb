export default function Testimonials() {
    const testimonials = [
        {
            name: "MARI BOGGIANO, MBA",
            role: "Pharmaceutical Executive",
            quote:
                "Loubna's coaching exceeded my expectations, guiding me to articulate my skills and experiences more effectively.",
            image: "/Testimonial/MARIBOGGIANO.png",
        },
        {
            name: "SHRUTI GOEL, MHA, CADDCT",
            role: "Educator & Expert Trainer",
            quote:
                "Dr. Loubna’s programs helped me maintain a positive mindset and strong value proposition, unlocking my potential for a fulfilling career.",
            image: "/Testimonial/MARIBOGGIANO.png",
        },
        {
            name: "DR. CAROLINE PALAVICINO, PHD",
            role: "Research Fellow, Cambridge, MA",
            quote:
                "Loubna’s coaching empowered me to test my limits, clarify my career goals, and achieve my dream role at Harvard Medical School.",
            image: "/Testimonial/MARIBOGGIANO.png",
        },
    ];

    return (
        <div className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-16 mt-16 mb-16">
            {testimonials.map((t, index) => (
                <div key={index} className="max-w-80 bg-[#cc1f23] text-white rounded-2xl flex flex-col h-full">
                    <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                        <img
                            src={t.image}
                            alt={t.name}
                            className="h-[270px] w-full rounded-t-2xl scale-105 transition-all duration-300 object-cover object-top mb-5"
                        />
                    </div>
                    <div className="px-4 pb-4 flex-1 flex flex-col">
                        <p className="font-light border-b border-white pb-5 flex-1">{t.quote}</p>
                        <div className="mt-4">
                            <p className="font-bold"> {t.name}</p>
                            <p className="text-sm font-medium text-white bg-clip-text">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
