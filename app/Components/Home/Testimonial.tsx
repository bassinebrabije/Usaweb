'use client';

const teamMembers = [
    {
        name: "Daniela Koumides",
        role: "MBA",
        media: "https://drive.google.com/file/d/1oRYVTAOeSVssLGHF_AOrFLaEtusubcoK/preview",
        type: "iframe",
    },
    {
        name: "Julianne Jarvis",
        role: "MBA",
        media: "https://drive.google.com/file/d/1xAsBl_yyiUgqvzBnmybaTODWob-oG7Y9/preview",
        type: "iframe",
    },
    {
        name: "Shruti Goel",
        role: "",
        media: "https://drive.google.com/file/d/1XybxluBwY6COKLrxyAQBpGR42zdIFVc5/preview",
        type: "iframe",
    },
    {
        name: "Marisela Riveros",
        role: "MBA",
        media: "https://drive.google.com/file/d/1O4VTOcZ29gdhNxwHFmTljfR773bfq1XF/preview",
        type: "iframe",
    },
    // other members...
];

export default function TeamSection() {
    return (
        <div className="max-w-7xl px-4 py-5 sm:px-6 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-4xl font-bold tracking-tight sm:leading-16 text-gray-800 sm:text-4xl lg:text-5xl">
                    What my clients say
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        {/* Portrait video container */}
                        <div className="mx-auto w-full max-w-[300px] h-0 pb-[177.77%] rounded-xl overflow-hidden relative cursor-pointer">
                            {member.type === "video" && (
                                <video
                                    src={member.media}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    loop
                                    controls
                                    playsInline
                                    muted
                                />
                            )}

                            {member.type === "iframe" && (
                                <iframe
                                    src={member.media}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                    loading="lazy"
                                    frameBorder="0"
                                />
                            )}
                        </div>
                        {/* Name and Role */}
                        <div className="mt-4 sm:mt-6">
                            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                {member.name}
                            </h3>
                            {member.role && (
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    {member.role}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
