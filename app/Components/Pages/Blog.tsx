import Image from "next/image";

const BlogGrid = () => {
    const posts = [
        {
            title: "EXECUTIVE COACHING",
            subtitle: "1:1 Coaching ** Group Coaching ** Outplacement ** Executive Search",
            description: `Building a Positive Mindset
Gaining Clarity
Building Confidence
Courageous Conversations
Positioning for Career Growth & Success
360 Leader Agility & Empowerment
Overcoming Limiting Beliefs`,
            img: "/blog/5G50RqdKRMK4zeAuTcjy_ik5VaESx6mctAX3ZK03Q_Loubna-client_meeting_3.jpg",
            label: "New",
            readTime: "3 min read",
        },
        {
            title: "LEADERSHIP TRAINING",
            subtitle: "Workshops ** Group Coaching",
            description: `Leadership Agility in VUCA Times
Managing High-Performance Teams
Managing Critical Communications
Career Advancement for Mid-Level Managers
Leading with Emotional Intelligence
Career Advancement for Senior Executives
Emotional Intelligence for Leaders`,
            img: "/blog/aKYfKqkEQjuMpMkYqRNx_rOENnnRbQimklAgpk7cX_IMG_1076.jpg",
            label: null,
            readTime: "3 min read",
        },
        {
            title: "SPEAKING ENGAGEMENTS",
            subtitle: `Panel Moderation & Discussion  
            Workshops ** Lunch and Learn`,
            description: `Motivational Speaking
Organizations – Small & Large
Trade Associations – Universities
Radio Interviews – Podcast Guesting`,
            img: "/blog/88InU5veTGuJLk3p5xIA_DdRhhEfvRwOF8GE6N6xa_Loubna_Erraji.webp",
            label: "New",
            readTime: "3 min read",
        },
    ];

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20 max-w-7xl mx-auto">
            {posts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <Image
                            src={post.img}
                            alt={post.title}
                            width={600}
                            height={360}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <div className="text-xl font-bold text-red-600  mb-2">{post.title}</div>
                        <div className="text-lg font-medium text-gray-900  mb-2">{post.subtitle}</div>
                        <p className="text-gray-500 text-sm  ligh leading-8">{post.description}</p>
                    </div>
                </div>
            ))}
        </section>

    );
};

export default BlogGrid;
