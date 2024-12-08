import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

function FeatureCards({ icon, title, description }) {
    return (
        <Card className={`border transition-all duration-300 hover:shadow-lg rounded-lg w-[450px] h-[200px] relative`}>
            <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 text-foreground">{icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-foreground font-noto">{title}</h4>
                <p className="text-muted-foreground font-noto">{description}</p>
            </CardContent>
            <BorderBeam size={250} duration={12} delay={9} />
        </Card>
    )
}

export default FeatureCards