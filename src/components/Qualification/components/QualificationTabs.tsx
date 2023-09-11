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
      <TabsContent value="edu">
        <QualificationItem
          title="Web Design"
          subtitle="Spain - Institute"
          duration="2021- Present"
          position="left"
        />
        <QualificationItem
          title="Art Directory"
          subtitle="Spain - Institute"
          duration="2021- Present"
          position="right"
        />
        <QualificationItem
          title="Web Development"
          subtitle="Spain - Institute"
          duration="2021- Present"
          position="left"
        />
        <QualificationItem
          title="UX Expert"
          subtitle="Spain - Institute"
          duration="2021- Present"
          position="right"
        />
      </TabsContent>
      <TabsContent value="exp">
        <QualificationItem
          title="Web Designer"
          subtitle="Apple"
          duration="2021- Present"
          position="left"
        />
        <QualificationItem
          title="Art Director"
          subtitle="Microsoft"
          duration="2018 - 2021"
          position="right"
        />
        <QualificationItem
          title="Web Developer"
          subtitle="Amazon"
          duration="2015 - 2018"
          position="left"
        />
        <QualificationItem
          title="UX Expert"
          subtitle="Facebook"
          duration="2012 - 2015"
          position="right"
        />
      </TabsContent>
    </Tabs>
  );
}
