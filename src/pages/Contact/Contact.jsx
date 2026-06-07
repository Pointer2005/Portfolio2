import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-primary text-center drop-shadow-md"
        >
          Contact Me
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <form className="bg-white/5 border border-white/10 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-black/20 border-white/10 focus-visible:ring-primary/50 text-foreground py-6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-black/20 border-white/10 focus-visible:ring-primary/50 text-foreground py-6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Textarea
                placeholder="Your Message"
                rows="6"
                className="bg-black/20 border-white/10 focus-visible:ring-primary/50 text-foreground resize-none"
              ></Textarea>
            </div>
            <Button type="submit" size="lg" className="w-full py-6 text-lg mt-2">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;