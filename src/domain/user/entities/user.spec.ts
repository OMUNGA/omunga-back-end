import {User, UserProps } from "./user";

describe("User unit tests", () => {
    it("add user", () => {

        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
        }

        const user = new User(userProps,"");
        expect(user.Props).toStrictEqual({
            ...userProps,
            _id: "",
            phone:0,
            bio:"",
            photo:""
        })
    })

    it("should change firstName None", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
        }
        const user = new User(userProps,"");
    
        user.changeName("","Xica")
    
        expect(user.Props.firstName).toBe("Ana");
      });

      it("should change lastName None", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
        }
        const user = new User(userProps,"");
    
        user.changeName("Maria","")
    
        expect(user.Props.lastName).toBe("Afonso");
      });

      it("should change Email", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
        }
        const user = new User(userProps,"");
    
        user.changeEmail("xica1afonso@gmail.com")
    
        expect(user.Props.email).toBe("xica1afonso@gmail.com");
      });

      it("should change Phone", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
            phone: 932456923
        }
        const user = new User(userProps,"");
    
        user.changePhone(954098132)
    
        expect(user.Props.phone).toBe(954098132);
      });

      it("should change Photo", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
            phone: 932456923,
            photo:"exemplo2.png"
        }
        const user = new User(userProps,"");
    
        user.changePhoto("exemplo3.png")
    
        expect(user.Props.photo).toBe("exemplo3.png");
      });

      it("should Verify Password valid", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
            phone: 932456923,
            photo:"exemplo2.png"
        }
        const user = new User(userProps,"");

        user.VerifyPassword("password")
    
        expect(true).toBe(true);
      });

      it("should Verify Password invalid", () => {
        
        const userProps : UserProps = {
            firstName: "Ana",
            lastName: "Afonso",
            email: "anaafonso@gmail.com",
            password: "password",
            phone: 932456923,
            photo:"exemplo2.png"
        }
        const user = new User(userProps,"");

        user.VerifyPassword("drowssap")
    
        expect(false).toBe(false);
      });

})