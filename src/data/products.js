import imgWedding from '../assets/weeding.jpg';
import imgBirthday from '../assets/birthday.jpg';
import imgLetterhead from '../assets/letterhead.jpg';
import imgStamp from '../assets/stamp.webp';
import imgPostcard from '../assets/postcard.jpg';
import imgBusinessCard from '../assets/businesscard.jpg';
import imgFlyer from '../assets/flyer.webp';
import imgBrochure from '../assets/promotional.jpg';
import imgCert from '../assets/certificate.jpg';
import imgIdCard from '../assets/idcard.webp';
import imgBanner from '../assets/banner1.jpg';
import imgStandy from '../assets/standy.avif';
import imgStickers from '../assets/sticker.jpg';
import imgMenu from '../assets/menu.avif';

export const products = [
  { id: 1, title: "Royal Wedding Cards", tag: "Premium", category: "Cards", price: "₹2,500.00", qty: "50", img: imgWedding, description: "Exquisite premium wedding cards with gold foiling and textured paper options. Fully customizable designs to match your special day." },
  { id: 2, title: "Birthday Invitation Set", tag: "Popular", category: "Cards", price: "₹499.00", qty: "20", img: imgBirthday, description: "Fun and vibrant birthday invitations. High-quality digital print on 300gsm glossy cardstock." },
  { id: 3, title: "Corporate Letterhead", tag: "Featured", category: "Office", price: "₹120.00", qty: "10", img: imgLetterhead, description: "Professional 100gsm bond paper letterheads." },
  { id: 4, title: "Self-Inking Rubber Stamp", tag: "Essential", category: "Office", price: "₹150.00", qty: "1", img: imgStamp, description: "Durable self-inking stamps." },
  { id: 5, title: "Vintage Postcards", tag: "Classic", category: "Cards", price: "₹199.00", qty: "10", img: imgPostcard, description: "Classic postcards." },
  { id: 6, title: "Executive Business Card", tag: "Featured", category: "Office", price: "₹350.00", qty: "100", img: imgBusinessCard, description: "Premium cards." },
  { id: 7, title: "Promotional Flyer", tag: "Bulk", category: "Marketing", price: "₹800.00", qty: "500", img: imgFlyer, description: "Marketing flyers." },
  { id: 8, title: "Trifold Brochure", tag: "Marketing", category: "Marketing", price: "₹1,200.00", qty: "100", img: imgBrochure, description: "Professional brochure." },
  { id: 10, title: "Achievement Certificates", tag: "Popular", category: "Office", price: "₹299.00", qty: "5", img: imgCert, description: "Certificates." },
  { id: 12, title: "PVC Employee ID Card", tag: "Essential", category: "Office", price: "₹60.00", qty: "1", img: imgIdCard, description: "ID cards." },
  { id: 13, title: "Outdoor Vinyl Banner", tag: "Large Format", category: "Large Format", price: "₹450.00", qty: "1", img: imgBanner, description: "Banners." },
  { id: 14, title: "Roll-up Standy (6x3)", tag: "Featured", category: "Large Format", price: "₹1,399.00", qty: "1", img: imgStandy, description: "Standy." },
  { id: 16, title: "Round Product Stickers", tag: "Labels", category: "Packaging", price: "₹110.00", qty: "30", img: imgStickers, description: "Stickers." },
  { id: 19, title: "Restaurant Menu Cards", tag: "Hospitality", category: "Marketing", price: "₹850.00", qty: "10", img: imgMenu, description: "Menu cards." }
];

export const filters = ['All', 'Cards', 'Marketing', 'Office', 'Large Format', 'Packaging'];