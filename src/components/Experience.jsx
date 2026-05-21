import { motion } from "framer-motion";
import { workExperience, education } from "../data/experience";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

export default function Experience() {
  const TimelineItem = ({ item, isLast }) => (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-zinc-800" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
      </div>

      <Card className="p-4">
        <div className="flex items-start gap-4">
          <img
            src={item.logo}
            alt={item.company || item.institution}
            className="w-12 h-12 rounded-lg border border-zinc-800"
          />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-zinc-50">
              {item.position || item.degree}
            </h3>
            <p className="text-sm text-zinc-400 mb-2">
              {item.company || item.institution}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {item.type && <Badge>{item.type}</Badge>}
              <span className="text-xs text-zinc-500">
                {item.startDate} - {item.endDate}
              </span>
              {item.location && (
                <span className="text-xs text-zinc-500">• {item.location}</span>
              )}
            </div>
            <p className="text-sm text-zinc-400">{item.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <section id="experience" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         
          {/* <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-50">
              Work Experience
            </h2>
            <div>
              {workExperience.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </div> */}

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-zinc-50">Education</h2>
            <div>
              {education.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
