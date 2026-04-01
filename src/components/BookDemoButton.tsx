"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LogoWordmark } from "@/components/BrandLogo";
import { EnquiryForm } from "./EnquiryForm";
import { Phone, Download, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface BookDemoButtonProps {
    text?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    icon?: "phone" | "download" | "arrow" | "none";
    asChild?: boolean;
    children?: ReactNode;
    trigger?: ReactNode; // New prop for fully custom trigger
}

export function BookDemoButton({
    text = "Book Free Demo",
    variant = "default",
    size = "default",
    className,
    icon = "none",
    children,
    trigger
}: BookDemoButtonProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger ? (
                    trigger
                ) : (
                    <Button variant={variant} size={size} className={className}>
                        {children || text}
                        {icon === "phone" && <Phone className="ml-2 h-4 w-4" />}
                        {icon === "download" && <Download className="ml-2 h-4 w-4" />}
                        {icon === "arrow" && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px] border border-white/10 bg-slate-950/95 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-8">
                <DialogHeader className="space-y-5 text-left">
                    <LogoWordmark className="hero-brand-drop h-10 w-auto max-w-[200px] object-contain object-left opacity-95 sm:h-11 sm:max-w-[220px]" />
                    <DialogTitle className="text-2xl sm:text-3xl font-bold">Book your free session</DialogTitle>
                    <DialogDescription className="text-white/70">
                        Share your details to schedule a demo or counselling session with our team.
                    </DialogDescription>
                </DialogHeader>
                <EnquiryForm onSuccess={() => { }} />
            </DialogContent>
        </Dialog>
    );
}

export default BookDemoButton;
