import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Check, X } from "lucide-react";
import {
  FluidBackground,
  FluidCard,
  FluidButton,
  WaveTransition,
  FluidLoader,
} from "@/components/ui/fluid-animations";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = async () => {
    if (!certificateId.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock verification logic
      const isValid =
        certificateId.includes("INLIGHN") || certificateId.length >= 8;

      if (isValid) {
        setVerificationResult({
          valid: true,
          holderName: "John Doe",
          program: "Cybersecurity Internship",
          issueDate: "March 15, 2024",
          certificateId: certificateId,
          skills: ["Ethical Hacking", "Network Security", "Incident Response"],
        });
      } else {
        setVerificationResult({
          valid: false,
          message: "Certificate not found or invalid ID",
        });
      }

      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setCertificateId("");
    setVerificationResult(null);
  };

  return (
    <FluidBackground intensity="low" className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Floating Certificate Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 text-4xl animate-liquid-drop opacity-30">
            🏆
          </div>
          <div
            className="absolute top-40 right-32 text-3xl animate-liquid-drop opacity-20"
            style={{ animationDelay: "1s" }}
          >
            🎓
          </div>
          <div
            className="absolute bottom-32 left-1/4 text-5xl animate-liquid-drop opacity-25"
            style={{ animationDelay: "2s" }}
          >
            ✅
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <WaveTransition isVisible={isVisible} direction="up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Verify{" "}
              <span className="animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Certificate
              </span>
            </h1>
          </WaveTransition>
          <WaveTransition
            isVisible={isVisible}
            direction="up"
            className="delay-200"
          >
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Verify the authenticity of Inlighn Tech internship certificates
              using the unique certificate ID.
            </p>
          </WaveTransition>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <WaveTransition
            isVisible={isVisible}
            direction="up"
            className="delay-300"
          >
            <FluidCard className="p-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary via-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-fluid-pulse">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Certificate Verification
                  </h2>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-300">
                    Certificate ID
                  </label>
                  <Input
                    type="text"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    placeholder="Enter certificate ID (e.g., INLIGHN-2024-CS-001)"
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                  />
                  <p className="text-sm text-gray-400">
                    Enter the unique certificate ID found on your Inlighn Tech
                    certificate
                  </p>
                </div>

                <div className="flex space-x-4">
                  <FluidButton
                    onClick={handleVerify}
                    disabled={!certificateId.trim() || isLoading}
                    variant="primary"
                    className="flex-1"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <FluidLoader size="sm" />
                        <span>Verifying...</span>
                      </div>
                    ) : (
                      "Verify Certificate"
                    )}
                  </FluidButton>
                  {verificationResult && (
                    <FluidButton
                      onClick={handleReset}
                      variant="secondary"
                      className="border border-primary text-primary"
                    >
                      Reset
                    </FluidButton>
                  )}
                </div>
              </div>
            </FluidCard>
          </WaveTransition>

          {/* Verification Result */}
          {verificationResult && (
            <WaveTransition isVisible={true} direction="up" className="mt-8">
              <FluidCard className="p-8">
                {verificationResult.valid ? (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Certificate Valid
                        </h3>
                        <p className="text-green-400">
                          This certificate is authentic and verified
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-tech-cyan font-semibold mb-2">
                          Certificate Holder
                        </h4>
                        <p className="text-white">
                          {verificationResult.holderName}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-tech-cyan font-semibold mb-2">
                          Program
                        </h4>
                        <p className="text-white">
                          {verificationResult.program}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-tech-cyan font-semibold mb-2">
                          Issue Date
                        </h4>
                        <p className="text-white">
                          {verificationResult.issueDate}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-tech-cyan font-semibold mb-2">
                          Certificate ID
                        </h4>
                        <p className="text-white font-mono text-sm">
                          {verificationResult.certificateId}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-tech-cyan font-semibold mb-2">
                        Skills Certified
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {verificationResult.skills.map(
                          (skill: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-tech-purple/20 text-tech-cyan text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <X className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Certificate Invalid
                        </h3>
                        <p className="text-red-400">
                          {verificationResult.message}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-300">
                      <p>
                        Please check the certificate ID and try again. If you
                        believe this is an error, please contact our support
                        team.
                      </p>
                    </div>
                  </div>
                )}
              </FluidCard>
            </WaveTransition>
          )}

          {/* Instructions */}
          <WaveTransition
            isVisible={isVisible}
            direction="up"
            className="delay-500 mt-8"
          >
            <FluidCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                How to Verify
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-tech-cyan font-bold">1.</span>
                  <span>
                    Locate the certificate ID on your Inlighn Tech certificate
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-tech-cyan font-bold">2.</span>
                  <span>
                    Enter the complete certificate ID in the field above
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-tech-cyan font-bold">3.</span>
                  <span>Click "Verify Certificate" to check authenticity</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-tech-cyan font-bold">4.</span>
                  <span>
                    View the verification results and certificate details
                  </span>
                </div>
              </div>
            </FluidCard>
          </WaveTransition>
        </div>
      </section>

      <Footer />
    </FluidBackground>
  );
};

export default VerifyCertificate;
