"use client"

import type React from "react"
import { useState } from "react"
//import { TopBar } from "@/components/top-bar"

//import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
//import Footer from "@/components/shared/Footer"
//import Navber from "@/components/shared/Navber"
//import { Textarea } from "@/components/ui/textarea"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("ধন্যবাদ! আপনার বার্তা আমরা পেয়েছি। Daily News টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <>
     

      <div className="min-h-screen bg-background mt-10 ">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* ---------- LEFT SIDE (Contact Info) ---------- */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">যোগাযোগ করুন</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                আমাদের Daily News টিম সবসময় আপনার মতামত, পরামর্শ ও প্রশ্নের জন্য উন্মুক্ত। নিচের ফর্ম পূরণ করে অথবা সরাসরি আমাদের মাধ্যমে যোগাযোগ করতে পারেন।
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ফোন</h3>
                    <p className="text-muted-foreground">+880 1712-345678</p>
                    <p className="text-muted-foreground">Newsroom Hotline: 09612-NEWS24</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ইমেইল</h3>
                    <p className="text-muted-foreground">editor@dailynews.com</p>
                    <p className="text-muted-foreground">info@dailynews.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">অফিসের ঠিকানা</h3>
                    <p className="text-muted-foreground">Daily News অফিস, চারঘাট রোড</p>
                    <p className="text-muted-foreground">রাজশাহী, বাংলাদেশ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">অফিস সময়</h3>
                    <p className="text-muted-foreground">রবিবার - বৃহস্পতিবার: সকাল ৯টা - রাত ৮টা</p>
                    <p className="text-muted-foreground">শুক্রবার ও শনিবার: বিকাল ৩টা - রাত ৯টা</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- RIGHT SIDE (Contact Form + Map) ---------- */}
            <div className="bg-muted/50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary">বার্তা পাঠান</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">নাম *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">ইমেইল *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">ফোন *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1XXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">বিষয় *</label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="আপনার বার্তার বিষয় লিখুন"
                  />
                </div>

                {/* <div>
                  <label className="text-sm font-medium mb-2 block">বার্তা *</label>
                  {/* <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="আপনার বার্তা লিখুন..."
                    rows={5}
                  />
                </div> */} 

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  বার্তা পাঠান
                </Button>
              </form>

              {/* ---------- Google Map ---------- */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.304848871505!2d88.60884167446585!3d24.374674278259665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef4b0fd2f8a1%3A0x2a8f4eb88a875e5!2sRajshahi%20City!5e0!3m2!1sen!2sbd!4v1695467890000!5m2!1sen!2sbd"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}
