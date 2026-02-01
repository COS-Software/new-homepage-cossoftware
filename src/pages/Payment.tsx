import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Footer from "@/components/layout/Footer";
import { CreditCard, QrCode, Lock, Shield, Check } from "lucide-react";

const Payment = () => {
  const { client } = useParams();
  const productName = client ? client.replace(/-/g, ' ') : 'Serviço';
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const monthlyPrice = 20;
  const annualPrice = monthlyPrice * 12 * 0.9; // 10% discount
  const savings = monthlyPrice * 12 - annualPrice;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <img 
                  src="/assets/logo.png" 
                  alt="COSSOFTWARE" 
                  className="h-24 mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">Pagamento</h1>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg inline-block">
                  <h2 className="text-xl font-semibold">{productName}</h2>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Escolha seu plano</CardTitle>
                  <CardDescription>
                    Selecione o período de assinatura que melhor se adequa às suas necessidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    defaultValue="monthly"
                    className="grid grid-cols-2 gap-4"
                    onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'annual')}
                  >
                    <div className="relative">
                      <RadioGroupItem
                        value="monthly"
                        id="monthly"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="monthly"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <div className="text-center">
                          <h3 className="font-semibold">Mensal</h3>
                          <p className="text-2xl font-bold">R$ {monthlyPrice.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">por mês</p>
                        </div>
                      </Label>
                    </div>

                    <div className="relative">
                      <RadioGroupItem
                        value="annual"
                        id="annual"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="annual"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <div className="text-center">
                          <h3 className="font-semibold">Anual</h3>
                          <p className="text-2xl font-bold">R$ {annualPrice.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">por ano</p>
                          <div className="mt-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            Economize R$ {savings.toFixed(2)}
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {billingPeriod === 'monthly' 
                      ? `R$ ${monthlyPrice.toFixed(2)}/mês`
                      : `R$ ${annualPrice.toFixed(2)}/ano`
                    }
                  </CardTitle>
                  <CardDescription>
                    {billingPeriod === 'monthly' 
                      ? 'Valor mensal para acesso ao serviço'
                      : 'Valor anual com 10% de desconto'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="pix" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="pix">
                        <QrCode className="w-4 h-4 mr-2" />
                        PIX
                      </TabsTrigger>
                      <TabsTrigger value="card">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Cartão de Crédito
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="pix" className="space-y-6">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="bg-white p-4 rounded-lg border">
                          {/* Demo QR Code - Replace with actual QR code */}
                          <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400">QR Code Demo</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          Escaneie o QR Code com seu aplicativo de pagamento
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Informações da Empresa</h3>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>CNPJ: 00.000.000/0001-00</p>
                          <p>Razão Social: COS Software LTDA</p>
                          <p>Nome Fantasia: COS Software</p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="card" className="space-y-6">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Número do Cartão</Label>
                          <Input 
                            id="cardNumber" 
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Validade</Label>
                            <Input 
                              id="expiry" 
                              placeholder="MM/AA"
                              maxLength={5}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input 
                              id="cvv" 
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardName">Nome no Cartão</Label>
                          <Input 
                            id="cardName" 
                            placeholder="Como está no cartão"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="installments">Parcelas</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o número de parcelas" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1x de R$ {billingPeriod === 'monthly' ? monthlyPrice.toFixed(2) : annualPrice.toFixed(2)}</SelectItem>
                              <SelectItem value="2">2x de R$ {(billingPeriod === 'monthly' ? monthlyPrice : annualPrice / 2).toFixed(2)}</SelectItem>
                              <SelectItem value="3">3x de R$ {(billingPeriod === 'monthly' ? monthlyPrice : annualPrice / 3).toFixed(2)}</SelectItem>
                              <SelectItem value="4">4x de R$ {(billingPeriod === 'monthly' ? monthlyPrice : annualPrice / 4).toFixed(2)}</SelectItem>
                              <SelectItem value="5">5x de R$ {(billingPeriod === 'monthly' ? monthlyPrice : annualPrice / 5).toFixed(2)}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button className="w-full">
                          Finalizar Pagamento
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="mt-8 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <p className="text-sm text-gray-600">
                    Pagamento seguro com criptografia SSL
                  </p>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>Em caso de dúvidas, entre em contato:</p>
                  <p>WhatsApp: (67) 99336-9450</p>
                  <p>Email: contato@cossoftware.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Payment; 