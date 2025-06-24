import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Heart } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Customers", value: "50K+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: Heart, label: "Products Sold", value: "1M+" },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Davis",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About EliteStore</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the finest products from around the world. Our mission is to make premium
          quality accessible to everyone through exceptional service and unbeatable value.
        </p>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2014, EliteStore began as a small startup with a big dream: to revolutionize online shopping
                by focusing on quality, customer service, and innovation.
              </p>
              <p>
                What started in a garage has grown into a global marketplace trusted by millions of customers worldwide.
                We've maintained our commitment to excellence while scaling our operations to serve customers in over 25
                countries.
              </p>
              <p>
                Today, we continue to push boundaries, embrace new technologies, and most importantly, listen to our
                customers to deliver the shopping experience they deserve.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Behind every great company are great people. Meet the passionate individuals who make EliteStore possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do and shape the way we serve our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600">Every decision we make starts with our customers in mind.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
            <p className="text-gray-600">We never compromise on quality and continuously strive for excellence.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">We believe in making a positive impact on communities worldwide.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
