"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <>
      <div className="h-screen bg-[url('/images/background.png')] text-white bg-cover">
        <div className="h-full flex flex-col md:flex-row items-center justify-center md:justify-between p-4 gap-4 max-w-[1200px] mx-auto">
          <div className="md:flex md:flex-1 md:items-center md:justify-center md:text-7xl text-4xl">
            <div>
              <div>Glowme – Your </div>
              <div>AI Diary Companion</div>
            </div>
          </div>
          <div className="w-full md:flex-1 md:flex md:items-center md:justify-center">
            <Card className="md:py-20 py-10 md:w-96 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  登录到你的账户
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">密码</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full mt-2">
                    登录
                  </Button>
                </form>
                <div className="text-sm text-center text-muted-foreground mt-4">
                  还没有账号？
                  <a href="#" className="underline">
                    点击注册
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
