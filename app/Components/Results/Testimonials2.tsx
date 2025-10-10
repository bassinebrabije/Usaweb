// app/page.jsx or pages/index.jsx
"use client";

const testimonials = [
    {
        name: "John Doe",
        title: "Frontend Developer",
        message:
            "Integrating this component into our project was seamless and saved us countless hours of development and testing. Highly recommended!",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
        name: "Jane Smith",
        title: "Full Stack Engineer",
        message:
            "This solution not only simplified our workflow but also improved our UI consistency across the board. Excellent tool for modern teams.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
        name: "Bonnie Green",
        title: "UX Designer",
        message:
            "I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Bonnie Green",
        title: "UX Designer",
        message:
            "I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Bonnie Green",
        title: "UX Designer",
        message:
            "I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
        name: "Bonnie Green",
        title: "UX Designer",
        message:
            "I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
];

export default function Testimonials() {
    return (
        <div className="px-6 sm:py-12 mt-16">
            <div className="max-w-7xl mx-auto">
                {/* Responsive Grid with smaller gaps */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white border border-red-100 rounded-lg overflow-hidden p-6"
                        >
                            <div className="flex flex-col items-center text-center">
                                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{testimonial.message}</p>
                                <div className="flex items-center justify-center mt-2">
                                    <img
                                        className="rounded-full w-9 h-9"
                                        src={testimonial.image}
                                        alt={`${testimonial.name} profile`}
                                    />
                                    <div className="ml-3 text-left">
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
