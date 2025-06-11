import { Testimonial } from "../cards/Testimonial";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const testimonials = [
  { name: "Jane Doe", feedback: "corAI transformed our workflow!" },
  { name: "John Smith", feedback: "Incredible insights, great UI." },
  { name: "Alice Johnson", feedback: "Our productivity increased by 40%." },
];

export const TestimonialsSection = () => (
  <section
    id="testimonials"
    className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
  >
    <Container className="space-y-12 text-center">
      <Title>
        <span className="text-gray-900 dark:text-white transition-colors duration-300">
          What Our Clients Say
        </span>
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Testimonial key={i} name={t.name} feedback={t.feedback} />
        ))}
      </div>
    </Container>
  </section>
);
