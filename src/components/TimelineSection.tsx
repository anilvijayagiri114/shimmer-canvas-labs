import { motion } from "framer-motion";
import {
  Users,
  Laptop,
  Phone,
  Heart,
  Map,
  Waves,
  HeartHandshake,
  Clock,
  Star,
  Calendar,
  Train,
  MessageCircle,
  Footprints,
  Moon,
  PawPrint,
  Utensils,
  Film,
  AlertCircle,
  Coffee,
  MapPin,
  Bus,
  Smile,
  Building,
  Gamepad2,
  Cake,
  Gift,
  BookOpen,
  Monitor,
  Code,
  Infinity,
} from "lucide-react";

const milestones = [
  {
    icon: Users,
    date: "19 July 2024",
    title: "First Meeting",
    description:
      "We met during training days as colleagues, not knowing that this meeting would become one of the most meaningful parts of our life.",
  },
  {
    icon: Laptop,
    date: "Training Days",
    title: "Friendship Started",
    description:
      "Assisting with academic tasks turned into long conversations, daily talks, and late-night calls that made us understand each other deeply.",
  },
  {
  icon: Phone,
  date: "20 August 2024",
  title: "A Small Thing That Meant More",
  description:
    "When your flight from Hyderabad to Chennai got delayed, you called and asked if I could inform HR that you were not well and would be late. It felt like a small thing to me, but the way you thanked me made me realize you trusted me more than I thought.",
},
  {
    icon: Phone,
    date: "Late Night Calls",
    title: "Understanding Each Other",
    description:
      "Those 3–4 hour night calls from different hostels made the bond stronger than we ever expected.",
  },
  {
  icon: MessageCircle,
  date: "Our Talks",
  title: "The Way You Listened",
  description:
    "You always listened to my stories and life experiences with real interest. The way you got excited about small things made me feel comfortable sharing things I never told anyone else.",
},
{
  icon: Star,
  date: "30 August 2024",
  title: "Our Conversations & When You Opened Up",
  description:
    "You once shared about your friendships, the way people changed, and how you learned to stay strong even when things hurt. You said sometimes we matter to someone only for a while, not forever. You sounded strong, but I could understand there was a lot you never showed to others.",
},
{
  icon: Phone,
  date: "Daily Talks",
  title: "I Thought I Replied",
  description:
    "Sometimes you would message me and I thought I already replied, but later when you asked again, I realized I never did. Those small conversations became such a normal part of the day without even noticing.",
},
{
  icon: Train,
  date: "05 Sept 2024",
  title: "Things Didn’t Go As Planned",
  description:
    "She had booked an early train to go home for Vinayaka Chavithi, but didn’t get permission at first and got really tense. I kept telling her it would work out, and later when permission was granted, we laughed about how worried she was.",
},
{
  icon: Train,
  date: "11 September 2024",
  title: "Plans Changed That Day",
  description:
    "We boarded the train together for joining, but later the onboarding got postponed to the 17th. After thinking a lot about what to do next, we decided to come back home. That day felt confusing but memorable.",
},
{
  icon: Map,
  date: "21 September 2024",
  title: "A Peaceful Day",
  description:
    "We went to ISKCON together, spent some peaceful time there, had lunch, and came back to the hostel. That day you also boarded a bus in Chennai for the first time, and everything felt simple and good.",
},
{
  icon: PawPrint,
  date: "22 September 2024",
  title: "One Night Out That Cafe Night",
  description:
    "One night we went to a cafe for food and spent time in the play area with the Shih Tzu dogs. You were worried at first and hesitant to hold them, but later you enjoyed it, and that moment turned into a really fun memory.",
},
  {
    icon: Footprints,
    date: "Walk in Chennai",
    title: "The Long Walk",
    description:
      "She chose to walk with me for kilometers instead of taking a ride. That day I realized how rare such people are.",
  },
  {
  icon: Moon,
  date: "27 Sept 2024",
  title: "Chennai late nights & those Walks Back",
  description:
    "After spending time together, I used to walk with her till her hostel just to make sure she reached safely, and then come back alone. The walk back always felt quieter, thinking about the time we just spent.",
},
  {
    icon: Waves,
    date: "29 Sept 2024",
    title: "Beach Conversation",
    description:
      "A simple walk near the beach, random talks, and silence that felt comfortable. Some moments don’t need meaning, they just stay forever.",
  },
  {
  icon: Laptop,
  date: "3 October 2024",
  title: "Your Dedication",
  description:
    "You helped me complete my projects with full dedication, even when I wasn’t fully confident with the automation scripts. You did everything without hesitation, and I could see how sincerely you wanted things to work.",
},
{
  icon: Map,
  date: "4 October 2024",
  title: "You Really Wanted To Come",
  description:
    "You weren’t feeling well and couldn’t come to Arunachalam with us, even though you truly wanted to. Your mood was disturbed that day, and your roommates even took you out to keep your mind calm. That showed how much you wished to be there.",
},
{
  icon: Utensils,
  date: "Small Moments",
  title: "You Never Let Me Think Too Long",
  description:
    "I used to take forever to decide what to order, scrolling again and again without choosing anything. You would keep telling me to order fast, and sometimes you even said you would order yourself if I didn’t. Those small arguments somehow became fun moments.",
},
  {
  icon: HeartHandshake,
  date: "Chennai Days",
  title: "A Small Moment That Stayed",
  description:
    "One evening after eating dosa at the food street, we were walking back to her hostel through heavy traffic. Instead of holding my hand, she held the end of my shirt while following me through the crowd. It felt funny and childish, but I understood she felt comfortable with me. While crossing the road I held her hand, and for some reason that moment felt different. After going back to hostel, I called her to ask if she reached safely, but we ended up talking for hours about that day. That conversation made our bond feel closer than before.",
},
{
  icon: Star,
  date: "Things I Always Remember",
  title: "Simple Moments, Hard Days",
  description:
    "You came from a life more comfortable than mine, yet you chose to walk beside me in the simplest moments without ever making me feel less. I never wanted you to face difficult times, but life had its own plans, and all I could do was stay beside you as a your person, feeling like we were just part of something already written by destiny.",
},
{
  icon: Train,
  date: "10 October 2024",
  title: "A Conversation I Won’t Forget",
  description:
    "On the train from Chennai to home, we had one of the best conversations of our lives. We talked openly about everything, and it felt like those words would stay with us no matter where life takes us.",
},
{
  icon: Users,
  date: "14 October 2024",
  title: "First Talk At The Station",
  description:
    "While returning to Chennai, I spoke with your parents for the first time at the station. Your father kept asking questions seriously, while your mother seemed to find my answers funny. I kept trying to answer everything properly until you stepped in and made the moment easier.",
},
{
  icon: MessageCircle,
  date: "15 October 2024",
  title: "Why Her",
  description:
    "You once asked me as WHY ME? , and I answered in the most honest way I could. It wasn’t a long speech, just the truth from my side, and the way you understood it made that moment stay with me.",
},
{
  icon: Film,
  date: "Movie Day",
  title: "A Fun Day Together",
  description:
    "We went to watch Vettayan movie together and spent the day in the mall. We tried new games, explored different sports activities, and even experienced the other world for the first time. It was one of those days where everything felt simple and happy.",
},
{
  icon: AlertCircle,
  date: "One Of Those Phases",
  title: "Unspoken Feelings",
  description:
    "There were times when my closeness with others made you feel uneasy, even though nothing was really there. You never said it directly, but I could see it in your eyes. Those moments taught me that silence can say more than words.",
},
{
  icon: Waves,
  date: "27 October 2024",
  title: "Blue Flag Beach",
  description:
    "We went to Blue Flag Beach together with others, and the place felt calm and peaceful. Even in the crowd, the moment felt complete, and I remember wishing we had a little more time to just sit there and enjoy the silence.",
},
{
  icon: Map,
  date: "02 November 2024",
  title: "You Should Go",
  description:
    "I couldn’t come for the Kanchi trip because of unexpected reasons, but I didn’t want you to miss it like the Arunachalam trip. I told you to go even if I wasn’t there. I knew it might feel a little empty, but I wanted you to enjoy the moment without holding back.",
},
{
  icon: Coffee,
  date: "Academy Days",
  title: "Bread & Jam Days",
  description:
    "During the academy days, bread and jam somehow became our regular food. We used to eat it almost every day, sitting side by side in the training room cubicles. Those simple moments turned into memories I still smile about.",
},
{
  icon: Moon,
  date: "9 November 2024",
  title: "One Of Those Perfect Days",
  description:
    "That day was filled with deep conversations and shared moments that felt very real. I felt completely alive in your presence. I didn’t want anything to disturb that time, yet I still regret not saying one word the right way in between. Sometimes I wish I could go back and live that day again, just as it was.",
},
{
  icon: Phone,
  date: "19 November 2024",
  title: "That Vodka Call",
  description:
    "That night you called me after having vodka and started talking about random things in the funniest way. You knew what you were saying, but still spoke so freely that the whole conversation became one of those moments I can’t forget.",
},
{
  icon: MapPin,
  date: "23 November 2024",
  title: "Last Day In Chennai",
  description:
    "It was one of the last days in Chennai, and we spent it in the most memorable way. This time we were fully aware of the moments, enjoying everything with more presence, knowing these days would become memories we would carry forward.",
},
{
  icon: Bus,
  date: "Journey Back Home",
  title: "Chennai To Hyderabad",
  description:
    "That bus journey from Chennai to Hyderabad felt peaceful, like the clouds themselves were carrying us home. We talked, laughed, and remembered everything we went through. Stood with you, ate with you, shared stories with you — you were there in every part of my Chennai days, not just as a memory, but as one of the most important chapters of it.",
},
{
  icon: Building,
  date: "Hyderabad Days",
  title: "A New Chapter Began",
  description:
    "Hyderabad diaries started with office days, food plans, fun rides, desk bookings, and those long Ola shuttle journeys. Before projects and responsibilities began, those days felt light, free, and full of small moments we enjoyed without thinking too much about the future.",
},
  {
    icon: Clock,
    date: "Distance Phase",
    title: "Hard Days",
    description:
      "There were days we stopped talking, days that felt heavier than months. That silence showed how important the bond had become.",
  },
  {
  icon: Gamepad2,
  date: "Different Cities",
  title: "Slowly Getting Busy",
  description:
    "When I went back to Chennai and you stayed in Hyderabad, things slowly started changing. We got busy in our own routines, but still stayed connected through chess games, ludo matches, and random cricket talks. Even with the distance, we tried to keep those small moments alive.",
},
{
  icon: Heart,
  date: "26 December 2024",
  title: "Be Happy For Her",
  description:
    "You were feeling low because Pavitra was going abroad, and I could see you were sad even if you didn’t say much. I told you that she was going to achieve her goals and that you should feel happy for her. Sometimes all you needed was a small assurance that things would be okay.",
},
{
  icon: Building,
  date: "19 January 2025",
  title: "Same Office Again",
  description:
    "After returning from Chennai due to health reasons, I started reporting in Hyderabad office. Slowly, we both began going to the same office whenever needed, sometimes three times a week, and those days felt a little like the old times again.",
},
{
  icon: Cake,
  date: "11 March 2025",
  title: "A Special Day",
  description:
    "Your birthday was truly special. We visited the TTD temple, spent time at a café for lunch, and even met Satwika, your best friend. The day was filled with laughter, meaningful conversations, and memories I’ll always treasure.",
},
{
  icon: Users,
  date: "One Meeting",
  title: "A Question About Trust",
  description:
    "That day I met Satwika, your best friend, and the way she casually called me 'chinnoda' made the moment feel light and friendly. Later, you asked me something I still remember — whether we should prove ourselves to someone even when they say they can’t trust us. That question stayed with me longer than the conversation itself.",
},
  {
    icon: Star,
    date: "Realization",
    title: "She is Different",
    description:
      "In a world full of temporary people, she stayed real, honest, and kind. That is what made her special.",
  },
  {
  icon: Map,
  date: "Chennai Trip Again",
  title: "Not The Way I Wanted",
  description:
    "When I went to Chennai to pick up my luggage, another person came along for their own reason, which you didn’t like from the beginning. You still agreed only because of me, even though I knew you weren’t comfortable with it. The work got done for everyone, but the way it happened didn’t feel right to me. I liked that you trusted me, but I didn’t like that it went that way without me handling it better.",
},
{
  icon: Gift,
  date: "A Small Surprise",
  title: "The Pink Jungkook Pillow",
  description:
    "I gifted you the pink Jungkook pillow because I liked it and thought you would love it even more. It wasn’t about the price, but the joy it could bring to your face. Sometimes small gestures mean more than anything expensive.",
},
  {
  icon: Smile,
  date: "Those Months",
  title: "Time We Spent Together",
  description:
    "For months, we spent so much time together — eating, laughing, playing, travelling, and talking about everything. Those days became a part of routine without us even realizing how special they were.",
},
{
  icon: BookOpen,
  date: "Helping Hand",
  title: "Always There To Support",
  description:
    "She helped me with the PPTs and shared the work I did with Student Tribe. Her dedication and willingness to support made her feel like such a gem to me, someone I could always rely on.",
},
{
  icon: Cake,
  date: "07 August 2025",
  title: "Her Thoughtfulness",
  description:
    "On my birthday, she wished me warmly and we spent the day together at a café for lunch. Her care, attention, and the moments we shared made it unforgettable.",
},
{
  icon: Monitor,
  date: "Taking Responsibility",
  title: "Consistent And Reliable",
  description:
    "She took care of a few Instagram and YouTube responsibilities that I had started, managing them on her own for several days. Her consistency, initiative, and dedication showed me how reliable and capable she truly is.",
},
{
  icon: Code,
  date: "Freelancer Phase",
  title: "Starting Strong",
  description:
    "She began her journey as a freelancer developer with our SKY Tech Solutions, building applications with the knowledge she had gained. Watching her work with dedication and skill, I realized she’s a true all-rounder capable of achieving so much.",
},
{
  icon: HeartHandshake,
  date: "03 December 2025",
  title: "A Week Apart: Realizing How Much I Missed You",
  description:
    "I was away for more than a week attending my grandfather’s funeral and taking care of the ceremonies. After all the responsibilities, I felt an emptiness and anxiety that made me realize how much I missed you. For the first time, I confessed the feelings I had carried silently for over a year and a half.",
},
{
  icon: Waves,
  date: "27 December 2025",
  title: "Goa Memories: Confession By The Sea",
  description:
    "While in Goa, I called you in a different way and confessed my feelings once again, this time more openly and deeply, right there on the beach. The waves, the breeze, and that moment made it unforgettable.",
},
  {
    icon: Calendar,
    date: "Future",
    title: "Whatever Destiny Writes",
    description:
      "Some stories are not about ending together, but about wishing happiness for each other no matter what life decides.",
  },
  {
  icon: Infinity,
  date: "A Thought To Remember",
  title: "Cherish Every Moment",
  description:
    "When life gives you someone special, don’t worry about how long it will last. Enjoy every moment together, because tomorrow is uncertain and we never know what it may bring.",
},
];

const TimelineSection = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <Calendar className="h-7 w-7 text-primary mx-auto mb-3" />
          <h2 className="text-3xl font-bold mb-2">
            Our Journey
          </h2>
          <p className="text-muted-foreground">
            Moments that changed everything silently
          </p>
        </div>

        <div className="relative">

          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                {/* Icon */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left md:ml-auto"
                  }`}
                >
                  <span className="text-sm text-primary font-medium">
                    {milestone.date}
                  </span>

                  <h3 className="text-xl font-bold mt-1 mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;