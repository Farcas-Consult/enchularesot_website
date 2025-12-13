"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

type Section = {
  heading?: string;
  text: string;
};

type Post = {
  id: number;
  title: string;
  category: string;
  emoji: string;
  date: string;
  author: string;
  sections: Section[];
};

const posts: Post[] = [
  {
    id: 1,
    title: "Top 5 Things to Do Near Enchula",
    category: "Local Experiences",
    emoji: "🎯",
    date: "November 5, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Lake Vimba Kayak Adventure",
        text:
          "Start your morning with a tranquil kayak session on Lake Vimba. The calm waters reflect the golden sunrise, creating picture-perfect moments for photographers and nature enthusiasts alike. Join guided eco-tours to learn about native birds, aquatic plants, and local ecosystems. For thrill-seekers, some tours include light paddling challenges, exploration of hidden coves, and small rapids that add an element of adventure. Kayaking also provides a meditative experience, as the gentle sound of water and the surrounding greenery promote relaxation and mindfulness. Don't forget to bring binoculars for birdwatching and a waterproof camera to capture those unforgettable lake moments.",
      },
      {
        heading: "Enchula Cultural Village",
        text:
          "Located just 15 minutes from the resort, the cultural village immerses visitors in the rich traditions of the local community. Participate in hands-on pottery workshops, watch traditional dance performances, or savor authentic local meals cooked in clay pots. Families can enjoy craft activities with children, while culture enthusiasts can attend storytelling sessions led by village elders, sharing myths, history, and folklore. Weekly drum circles provide a lively opportunity to experience music and rhythm, creating an engaging and interactive cultural encounter. The village also hosts seasonal festivals, where visitors can observe ceremonial attire, taste festive foods, and even join in traditional dances, deepening their connection to the region's heritage.",
      },
      {
        heading: "Savannah Hike Trail",
        text:
          "This scenic trail features gently rolling hills, panoramic valley views, and abundant wildlife. Hikers may encounter deer, monkeys, exotic birds, and colorful butterflies along the path. Several picnic zones are scattered throughout the trail, perfect for a midday rest or scenic snack. Golden hour hikes are especially rewarding, offering warm light that enhances the landscape's natural beauty. Guided nature walks provide insights into local flora and fauna, while photography enthusiasts can capture sweeping vistas and intimate close-ups of flora and fauna. Trail difficulty varies, allowing both beginners and experienced hikers to enjoy the landscape safely while embracing the tranquility of the savannah.",
      },
      {
        heading: "Farm-to-Table Saturday Market",
        text:
          "Every Saturday, local farmers and artisans gather to sell fresh produce, handmade crafts, and traditional snacks. Visitors can sample roasted maize, herbal teas, fresh cheeses, and seasonal fruits, all sourced sustainably from nearby farms. This market provides an authentic glimpse into local agricultural practices and fosters direct engagement with the community. Guests can also participate in cooking demonstrations, learn about organic farming techniques, and purchase artisanal products to support local businesses. The vibrant colors, aromas, and sounds of the market create a lively and immersive sensory experience, perfect for families and solo travelers alike.",
      },
      {
        heading: "Hot Springs & Spa Retreat",
        text:
          "End your day with a rejuvenating soak in the natural mineral springs near the resort. The warm water relaxes muscles, relieves stress, and improves skin health. Pair your soak with a massage, clay facial, or aromatherapy session at the resort spa to enhance your sense of relaxation. Evening sessions under the stars create a magical, serene atmosphere, allowing guests to unwind fully and connect with nature. Guided yoga sessions near the springs offer an added wellness component, combining gentle exercise with the calming sounds of flowing water. This holistic retreat experience ensures both body and mind leave refreshed, making it a perfect way to conclude your day of adventure.",
      },
      {
        heading: "Insider Tips",
        text:
          "Rent bicycles from the resort to explore hidden paths that might be missed on foot. Mornings and late afternoons offer cooler temperatures and softer lighting, ideal for photography and comfortable hiking. Always carry water, light snacks, and a small first-aid kit for outdoor excursions. Binoculars are highly recommended for birdwatching along the trails, and guests should respect wildlife by maintaining a safe distance. Local guides can provide insider knowledge on secret viewpoints, lesser-known trails, and tips for capturing the best photos. Following these tips ensures a memorable, safe, and immersive adventure around Enchula.",
      },
    ],
  },
  // ... (other posts, including id:2)
  {
    id: 3,
    title: "Why Families Love Enchula Resort",
    category: "Family Travel",
    emoji: "👨‍👩‍👧‍👦",
    date: "October 20, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Family Suites & Activities",
        text:
          "Spacious family suites, a kids’ club, and a variety of activities make Enchula Resort a favorite for families. Children can enjoy supervised play, creative workshops, and outdoor adventures, while parents relax by the pool or indulge in spa treatments. Family movie nights, group hikes, and interactive storytelling sessions ensure that guests of all ages are entertained. The resort’s flexible dining options cater to picky eaters and adventurous foodies alike, making mealtimes stress-free and enjoyable for everyone.",
      },
      {
        heading: "Kids’ Club & Childcare",
        text:
          "The dedicated kids’ club offers a safe, engaging environment for children to play, learn, and make new friends. Activities include arts and crafts, nature walks, and themed adventure days. Professional childcare services allow parents to enjoy some well-deserved relaxation, knowing their children are in good hands.",
      },
      {
        heading: "Family Dining Options",
        text:
          "Enchula Resort’s restaurants offer kid-friendly menus alongside gourmet options for adults. Flexible seating, high chairs, and attentive staff make dining with children easy and enjoyable. Special family meal nights and cooking classes encourage everyone to participate and bond over delicious food.",
      },
      {
        heading: "Outdoor Adventures",
        text:
          "Families can explore hiking trails, go on guided nature walks, or rent bikes for a day of adventure. The resort’s location near Lake Vimba provides opportunities for kayaking, fishing, and picnicking by the water. Evening bonfires and stargazing sessions create magical memories for all ages.",
      },
      {
        heading: "Relaxation for Parents",
        text:
          "While kids are entertained, parents can unwind at the spa, enjoy a quiet swim, or take a yoga class. Couples’ massages and private dining experiences are available for those seeking a romantic escape within the family holiday.",
      },
    ],
  },
  {
    id: 6,
    title: "Culinary Journey; Farm-to-table Dining",
    category: "Food",
    emoji: "🍽️",
    date: "September 25, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Local Ingredients",
        text:
          "Fresh produce, dairy, and herbs are sourced from nearby farms, ensuring seasonal flavors in every dish. Guests can tour these farms and interact with farmers, learning how crops are cultivated, harvested, and prepared. The farmers often share their stories, teaching about traditional cultivation methods that have been passed down for generations. Seasonal ingredients, like heirloom tomatoes, wild herbs, and organic honey, are highlighted in daily menus, giving guests a taste of the local terroir. Experiencing the ingredient journey firsthand deepens appreciation for each dish's origin and care.",
      },
      {
        heading: "Signature Dishes",
        text:
          "Enjoy roasted root vegetables, herb-marinated grilled fish, and traditional stews prepared with local recipes. Seasonal specials highlight the best of the region, like pumpkin risotto in autumn or fresh berry tarts in summer. Each dish tells a story of local culture, agricultural practices, and culinary heritage. Guests often find that flavors are more vivid and aromatic than supermarket produce, emphasizing the importance of freshness and seasonality. Pairing these dishes with local wines or herbal infusions elevates the sensory experience.",
      },
      {
        heading: "Dining Experiences",
        text:
          "From lakeside dinners to communal cooking nights, guests can learn to prepare local dishes and dine under the stars. Wine pairings and tasting menus elevate the culinary journey. Guests can participate in themed dinners, like 'Spice of the Savannah' or 'Harvest Celebration,' where each course is inspired by ingredients grown just steps away. The communal dining experience encourages conversation, cultural exchange, and bonding among visitors, turning each meal into a memorable social event. Personalized chef recommendations and guided tasting tours make dining both educational and indulgent.",
      },
      {
        heading: "Chef Interactions",
        text:
          "Professional chefs offer classes and demonstrations, giving guests hands-on experience in local cuisine. Perfect for food enthusiasts and families alike. Sessions include learning plating techniques, flavor pairing, knife skills, and traditional cooking methods such as clay pot stews or open-fire grilling. Children can join 'junior chef' sessions to create simple, fun dishes alongside their parents. Guests often leave with new skills, recipes, and a deeper understanding of the balance between fresh ingredients, seasonality, and traditional culinary techniques. The chefs also share stories about local food culture, sustainable practices, and the history behind classic recipes, making it a full gastronomic education.",
      },
    ],
  },
];

// Function to estimate reading time
function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
          <p className="mb-6">We couldn't locate that article.</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/blog")}
              className="px-5 py-2 bg-[#800000] rounded-full text-white hover:bg-[#A04040] transition"
            >
              Go to Blog List
            </button>
            <button
              onClick={() => router.back()}
              className="px-5 py-2 border border-[#D7BFA8] rounded-full text-[#D7BFA8] hover:bg-white/5 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const combinedText = post.sections.map((s) => `${s.heading ?? ""} ${s.text}`).join(" ");
  const readTime = estimateReadTime(combinedText);

  const backgroundImages = [
    `${S3_BASE}/IMG_2256.webp`,
    `${S3_BASE}/IMG_2267.webp`,
    `${S3_BASE}/IMG_2272.webp`,
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="min-h-screen py-16 px-6 text-[#FAF5F0] relative"
      style={{
        backgroundImage: `url(${backgroundImages[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-[#2E1A15]/90 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/#blog"
        className="text-[#D7BFA8] hover:text-white flex items-center gap-2 mb-6">
          ← Back to Blogs
          </Link>



        <header className="mb-8 mt-10 text-center">
          <div className="text-6xl mb-4">{post.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">{post.title}</h1>
          <div className="flex justify-center items-center gap-3 text-[#D7BFA8] text-sm">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </header>

        <section className="space-y-8">
          {post.sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300"
            >
              {section.heading && (
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FAF5F0]">
                  {section.heading}
                </h3>
              )}
              <p className="text-lg leading-relaxed text-[#D7BFA8]">
                {section.text}
              </p>
            </div>
          ))}
        </section>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#D7BFA8]">Inspired to visit Enchula?</h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/booking")}
              className="px-8 py-3 bg-[#800000] text-white rounded-full font-semibold hover:bg-[#A04040] transition"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => router.push("/blog")}
              className="px-6 py-3 border border-[#D7BFA8] rounded-full text-[#D7BFA8] hover:bg-white/5 transition"
            >
              Back to All Posts
            </button>
          </div>
        </div>

        <div className="h-24" />
      </div>
    </main>
  );
}
