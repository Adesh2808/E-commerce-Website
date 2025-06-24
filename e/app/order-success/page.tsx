import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck } from "lucide-react"

export default function OrderSuccessPage() {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully placed and is being processed.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Order Number:</span>
                <span className="font-semibold">#{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="font-semibold">3-5 business days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="text-center p-6 border rounded-lg">
            <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Processing</h3>
            <p className="text-sm text-gray-600">Your order is being prepared</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <Truck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Shipping</h3>
            <p className="text-sm text-gray-600">We'll notify you when shipped</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
