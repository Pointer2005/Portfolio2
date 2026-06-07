import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Send } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary drop-shadow-md mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Email</h3>
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors text-lg">
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-lg">{siteConfig.location}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Follow Me</h3>
              <SocialLinks className="gap-4" />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <form className="bg-white/5 border border-white/10 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] shadow-2xl flex flex-col gap-6 relative overflow-hidden group">
              {/* Decorative glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex flex-col gap-2 relative z-10">
                <label className="text-sm font-medium text-foreground ml-1">Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="bg-black/20 border-white/10 focus-visible:ring-primary/50 text-foreground py-6 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <label className="text-sm font-medium text-foreground ml-1">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-black/20 border-white/10 focus-visible:ring-primary/50 text-foreground py-6 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <label className="text-sm font-medium text-foreground ml-1">Message</label>
                <Textarea
                  placeholder="How can I help you?"
                  rows="5"
                  className="bg-black/20 border-white/10 focus-visible:ring-primary/50 text-foreground resize-none rounded-xl"
                ></Textarea>
              </div>
              <Button type="submit" size="lg" className="w-full py-6 text-lg mt-4 rounded-xl relative z-10 group/btn">
                <Send className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;