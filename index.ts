import * as awsx from "@pulumi/awsx";

// Create a new VPC
const eksVpc = new awsx.ec2.Vpc("eks-vpc", {
    enableDnsHostnames: true,   // This causes the VPC to assign DNS hostnames to instances which are launched into the VPC. It essentially adds your instances to the AWS DNS Server.
    cidrBlock: "10.0.0.0/16",
    tags: {
        Organization: "Crater"
    }
});


// Export some values for use elsewhere
export const vpcId = eksVpc.vpcId;
export const privateSubnetIds = eksVpc.privateSubnetIds;
export const publicSubnetIds = eksVpc.publicSubnetIds;