"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QualificationItem from "./QualificationItem";

export default function QualificationTabs() {
  return (
    <Tabs defaultValue="edu">
      <TabsList className="bg-transparent w-full max-w-xl mx-auto mb-8">
        <TabsTrigger
          value="edu"
          className="text-h3 font-medium text-dark-2 hover:text-dark-1 data-[state=active]:text-dark-1"
        >
          <i className="uil uil-graduation-cap text-[1.8rem] mr-1"></i>
          Education
        </TabsTrigger>
        <TabsTrigger value="exp" className="text-h3 font-medium text-dark-2 hover:text-dark-1">
          <i className="uil uil-briefcase-alt text-[1.8rem] mr-1"></i>
          Experience
        </TabsTrigger>
      </TabsList>
      <TabsContent value="edu" className="max-w-xl mx-auto">
        <QualificationItem
          title="Automation and computer-integrated technologies"
          subtitle="National Technical University 'Kharkiv Polytechnic Institute', Kharkiv"
          duration="2013 - 2018"
          position="left"
        />
      </TabsContent>
      <TabsContent value="exp">
        <QualificationItem
          title="Markup Developer"
          subtitle="Anuitex"
          duration="Oct 2020 - Nov 2021"
          position="left"
        />
        <QualificationItem
          title="Frontend Developer"
          subtitle="Anuitex"
          duration="Dec 2021 - present"
          position="right"
        />
      </TabsContent>
    </Tabs>
  );
}
