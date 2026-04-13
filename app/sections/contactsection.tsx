"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CONTACT_LINKS = [
	{
		label: "Email",
		value: "pankaj@nitj.ac.in",
		href: "mailto:pankaj@nitj.ac.in",
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/pankajsharma",
		href: "https://linkedin.com/in/pankajsharma",
	},
	{
		label: "GitHub",
		value: "github.com/pankajsharma",
		href: "https://github.com/pankajsharma",
	},
];

export function ContactSection() {
	return (
		<section id="contact" className="relative px-6 py-24 md:py-28 bg-background">
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 70% 50% at 75% 10%, oklch(0.30 0.01 264 / 0.2), transparent 70%)",
				}}
				aria-hidden="true"
			/>

			<div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.5 }}
					className="rounded-2xl border border-border bg-card/85 p-6 md:p-8"
				>
					<Badge className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase mb-4">
						Let&apos;s Build Together
					</Badge>
					<h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3 text-foreground">
						Contact
					</h2>
					<p className="text-sm md:text-base text-muted-foreground font-mono mb-6">
						Have an idea, role, or collaboration in mind? Send me a message and I will get back soon.
					</p>

					<div className="space-y-3">
						{CONTACT_LINKS.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target={item.href.startsWith("http") ? "_blank" : undefined}
								rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
								className="flex items-center justify-between rounded-xl border border-border bg-muted/45 px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors"
							>
								<span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
									{item.label}
								</span>
								<span className="text-sm font-medium text-foreground">{item.value}</span>
							</a>
						))}
					</div>
				</motion.div>

				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.5, delay: 0.05 }}
					className="rounded-2xl border border-border bg-card/85 p-6 md:p-8 flex flex-col"
					onSubmit={(e) => e.preventDefault()}
				>
					<label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-name">
						Name
					</label>
					<input
						id="contact-name"
						type="text"
						className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground mb-4 outline-none focus:ring-2 focus:ring-ring"
						placeholder="Your name"
					/>

					<label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-email">
						Email
					</label>
					<input
						id="contact-email"
						type="email"
						className="h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground mb-4 outline-none focus:ring-2 focus:ring-ring"
						placeholder="your@email.com"
					/>

					<label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2" htmlFor="contact-message">
						Message
					</label>
					<textarea
						id="contact-message"
						className="min-h-32 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground mb-5 outline-none focus:ring-2 focus:ring-ring"
						placeholder="Tell me about your project"
					/>

					<Button type="submit" className="mt-auto h-11 rounded-xl font-semibold">
						Send Message
					</Button>
				</motion.form>
			</div>
		</section>
	);
}
