import Section from '../components/landing/Section';
import Header from '../components/landing/Header';
import Listing from '../components/landing/Listing';
import Footer from '../components/Footer';
import Testimonials from '../components/landing/Testimonials';

export default function IndexPage() {
	return (
		<>
			<Header />
			<Section />
			<Listing />
			<Testimonials />
			<Footer />
		</>
	);
}
