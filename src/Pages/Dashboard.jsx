import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { LineChart, Line, XAxis, YAxis, Tooltip as RechartTooltip, ResponsiveContainer } from "recharts";

function Dashboard() {
  const [urls, setUrls] = useState([
    {
      id: 1,
      original: "https://www.example.com",
      short: "https://trimrr.com/a1b2c3",
      clicks: 12,
      analytics: [
        { day: "Mon", clicks: 2 },
        { day: "Tue", clicks: 3 },
        { day: "Wed", clicks: 1 },
        { day: "Thu", clicks: 4 },
        { day: "Fri", clicks: 2 },
      ],
    },
    {
      id: 2,
      original: "https://www.google.com",
      short: "https://trimrr.com/x9y8z7",
      clicks: 45,
      analytics: [
        { day: "Mon", clicks: 10 },
        { day: "Tue", clicks: 8 },
        { day: "Wed", clicks: 12 },
        { day: "Thu", clicks: 9 },
        { day: "Fri", clicks: 6 },
      ],
    },
  ]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy"));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <p className="text-white text-3xl">
        Analytics data shown is sample data for demonstration.
        Real user engagement metrics will be available in future updates.
      </p>      <h1 className="text-3xl font-bold text-white mb-4">Your Shortened URLs</h1>

      {urls.length === 0 ? (
        <p className="text-gray-400">You don’t have any URLs yet. Shorten one now!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {urls.map((url) => (
            <Card
              key={url.id}
              className="bg-white/5 backdrop-blur-md border border-white/20 shadow-md hover:shadow-yellow-400/20 transition"
            >
              <CardHeader>
                <CardTitle className="text-gray-300 truncate">
                  Original: <span className="font-medium">{url.original}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                \                <div className="flex items-center justify-between">
                  <Tooltip>
                    <TooltipTrigger>
                      <a
                        href={url.short}
                        target="_blank"
                        className="text-yellow-400 font-semibold truncate"
                      >
                        {url.short}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Click to open short URL</TooltipContent>
                  </Tooltip>

                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(url.short)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    Copy
                  </Button>
                </div>

                <Badge className="bg-gray-700 text-white">Total Clicks: {url.clicks}</Badge>

                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={url.analytics}>
                      <XAxis dataKey="day" stroke="#fff" />
                      <YAxis stroke="#fff" />
                      <RechartTooltip />
                      <Line type="monotone" dataKey="clicks" stroke="#FACC15" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
