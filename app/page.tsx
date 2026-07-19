"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Code2,
  Database,
  Server,
  Globe,
  TrendingUp,
  Building,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  MonitorSpeaker,
  Zap,
  Shield,
  BarChart3,
  LineChart,
  GraduationCap,
  CheckSquare,
  Send,
  Video,
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                IntegraSyS
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                {["sobre", "projetos", "tecnologias", "contato"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 capitalize font-medium"
                  >
                    {item}
                  </button>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Desenvolvedor{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Full-Stack
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Especialista em trading analytics, sistemas financeiros, ERPs e
              plataformas educacionais. Transformo ideias complexas em soluções
              digitais escaláveis e intuitivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projetos")}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg rounded-xl transition-all duration-200 hover:scale-105"
              >
                Ver Projetos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white px-8 py-3 text-lg rounded-xl transition-all duration-200 hover:scale-105"
              >
                Entrar em Contato
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Desenvolvedor apaixonado por criar soluções que fazem a diferença
              no mundo dos negócios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Experiência & Expertise
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Com sólida experiência em desenvolvimento full-stack,
                especializo-me na criação de sistemas complexos que combinam
                análise de dados financeiros, automação de processos
                empresariais e interfaces intuitivas.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: BarChart3,
                    text: "Análise de opções e gamma exposure em tempo real",
                  },
                  {
                    icon: LineChart,
                    text: "Sistemas de análise macroeconômica em tempo real",
                  },
                  {
                    icon: Building,
                    text: "ERPs completos para gestão empresarial",
                  },
                  {
                    icon: Zap,
                    text: "Arquiteturas escaláveis e de alta performance",
                  },
                  {
                    icon: Shield,
                    text: "Integração de APIs e processamento de dados",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white p-6 border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="mb-4">
                  <span className="text-green-400 text-sm">
                    financeLogic.js
                  </span>
                </div>
                <pre className="text-sm font-mono leading-relaxed">
                  {`// Sistema de análise em tempo real
class Analisador {
  async monitorar() {
    const stream = await conectarStream();
    stream.on("trade", (trade) => {
      const sinal = calcularIndicadores(trade);
      if (sinal.confianca > 0.8) {
        notificarCliente(sinal);
      }
    });
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projetos"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projetos Principais
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sistemas robustos e inovadores que demonstram expertise técnica e
              visão de negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Macro Tendência */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Macro Tendência
                    </h3>
                    <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900">
                      Fintech
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Plataforma profissional de análise macroeconômica que monitora
                  e classifica ativos financeiros em tempo real como Alta, Queda
                  ou Neutro com inteligência multicritério.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Classificação inteligente de +50 ativos em tempo real",
                    "WebSocket para atualizações instantâneas",
                    "Autenticação social + planos de assinatura",
                    "Prisma ORM + MySQL",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Node.js", "Next.js", "WebSocket", "Prisma", "MySQL"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>

                <a href="https://macrotendencia.com" target="_blank">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white group-hover:bg-orange-700 dark:group-hover:bg-orange-600 transition-colors duration-200">
                    Acessar Macro Tendência
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* DomínioERP */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      DomínioERP
                    </h3>
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900">
                      ERP
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  ERP SaaS completo para pequenas e médias empresas. Módulos de
                  vendas, estoque, financeiro, produtos e CRM com cálculo
                  automático de parcelas, multas e juros.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Gestão de vendas com parcelamento automático",
                    "Controle de estoque com Kardex",
                    "Financeiro com contas a pagar/receber",
                    "Assinaturas via Stripe",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Node.js",
                    "Express",
                    "Sequelize",
                    "MySQL",
                    "Next.js",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <a href="https://dominioerp.org" target="_blank">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white group-hover:bg-blue-700 dark:group-hover:bg-blue-600 transition-colors duration-200">
                    Acessar DomínioERP
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* GammaFlow */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <LineChart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      GammaFlow
                    </h3>
                    <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900">
                      Trading
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Motor de análise de opções com gamma exposure em tempo real.
                  14+ indicadores institucionais para identificar fluxos
                  inteligentes no mercado de derivativos.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "GEX, delta acumulado e IV skew em tempo real",
                    "Streaming via Schwab API + WebSocket",
                    "Estratégias: GammaDefense, GammaMagnet",
                    "Scanner multi-símbolo com score agregado",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Python",
                    "WebSocket",
                    "Schwab API",
                    "MySQL",
                    "Next.js",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <a href="https://oracle.tail58e736.ts.net" target="_blank">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white group-hover:bg-purple-700 dark:group-hover:bg-purple-600 transition-colors duration-200">
                    Acessar GammaFlow
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Eliza ABC */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Eliza ABC
                    </h3>
                    <Badge className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900">
                      Educação
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Plataforma educacional infantil para alfabetização com design
                  gamificado, sistema de recompensas e progressão interativa
                  adaptada ao universo kids.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Interface lúdica e acessível para crianças",
                    "Design System com Flat Design + 3D",
                    "Sistema de badges e progressão",
                    "Animações e micro-interações",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <a href="https://vercel.com/eliel-m-s/eliza-abc" target="_blank">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white group-hover:bg-pink-700 dark:group-hover:bg-pink-600 transition-colors duration-200">
                    Acessar Eliza ABC
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Tasks / Notas */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckSquare className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Tasks
                    </h3>
                    <Badge className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-900">
                      Produtividade
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Aplicativo leve de gerenciamento de notas e tarefas com
                  autenticação JWT e banco de dados edge Turso (LibSQL).
                  Interface limpa e responsiva.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Autenticação segura com JWT + bcrypt",
                    "Banco de dados edge com Turso/LibSQL",
                    "Dashboard protegido com middleware",
                    "Modo escuro e responsivo",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "Turso",
                    "JWT",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <a href="https://notas-snowy-alpha.vercel.app" target="_blank">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white group-hover:bg-teal-700 dark:group-hover:bg-teal-600 transition-colors duration-200">
                    Acessar Tasks
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tecnologias"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ferramentas e tecnologias que utilizo para criar soluções de alta
              qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Frontend
                </h3>
                <div className="space-y-3">
                  {[
                    "React / Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Recharts",
                    "Lightweight Charts",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      className="block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-8 text-center">
                <Server className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Backend
                </h3>
                <div className="space-y-3">
                  {[
                    "Node.js / Python",
                    "Express.js",
                    "Prisma ORM",
                    "WebSocket",
                    "Sequelize",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      className="block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Database & Cloud */}
            <Card className="hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
              <CardContent className="p-8 text-center">
                <Database className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Database & Cloud
                </h3>
                <div className="space-y-3">
                  {["MySQL", "Turso", "Vercel", "Railway", "Git"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        className="block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Vamos Conversar
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Interessado em discutir um projeto ou oportunidade? Entre em
              contato!
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <a href="mailto:suportedev37@gmail.com" className="flex items-center space-x-4 group justify-center">
              <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  suportedev37@gmail.com
                </p>
              </div>
            </a>

            <a href="https://t.me/integrasys" target="_blank" className="flex items-center space-x-4 group justify-center">
              <div className="bg-sky-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Send className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Telegram
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  @integrasys
                </p>
              </div>
            </a>

            <a href="https://www.youtube.com/@Macro_Tend%C3%AAncia" target="_blank" className="flex items-center space-x-4 group justify-center">
              <div className="bg-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  YouTube
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  @Macro_Tendência
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">IntegraSyS</span>
            </div>

            <div className="flex space-x-8 text-sm">
              <span className="text-gray-400">Macro Tendência</span>
              <span className="text-gray-400">DomínioERP</span>
              <span className="text-gray-400">GammaFlow</span>
              <span className="text-gray-400">Eliza ABC</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Integrasys. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
