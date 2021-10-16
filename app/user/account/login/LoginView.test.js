const rewire = require("rewire")
const LoginView = rewire("./LoginView")
const mapStateToProps = LoginView.__get__("mapStateToProps")
const mapDispatchToProps = LoginView.__get__("mapDispatchToProps")
// @ponicode
describe("componentWillUpdate", () => {
    let inst

    beforeEach(() => {
        inst = new LoginView.LoginView()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let object2 = [{ isLoading: false, isSubmitted: false, error: "Message box: foo; bar\n", payload: "George" }, { isLoading: true, isSubmitted: false, error: "Message box: foo; bar\n", payload: "George" }, { isLoading: true, isSubmitted: false, error: "Message box: foo; bar\n", payload: "Jean-Philippe" }]
        let object = [{ username: "user name", password: "$p3onyycat" }, { username: "username", password: "NoWiFi4you" }, { username: "username", password: "$p3onyycat" }]
        let callFunction = () => {
            mapStateToProps({ textChangeReducer: object, formSubmitReducer: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object2 = [{ isLoading: true, isSubmitted: false, error: "invalid choice", payload: "George" }, { isLoading: false, isSubmitted: true, error: "error\n", payload: "Michael" }, { isLoading: false, isSubmitted: false, error: "Message box: foo; bar\n", payload: "Pierre Edouard" }]
        let object = [{ username: "user_name", password: "$p3onyycat" }, { username: "user123", password: "NoWiFi4you" }, { username: "user name", password: "!Lov3MyPianoPony" }]
        let callFunction = () => {
            mapStateToProps({ textChangeReducer: object, formSubmitReducer: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object2 = [{ isLoading: false, isSubmitted: true, error: "ValueError", payload: "Anas" }, { isLoading: true, isSubmitted: false, error: "invalid choice", payload: "Jean-Philippe" }, { isLoading: true, isSubmitted: true, error: "error", payload: "Anas" }]
        let object = [{ username: "user_name", password: "NoWiFi4you" }, { username: "user_name", password: "NoWiFi4you" }, { username: "user123", password: "YouarenotAllowed2Use" }]
        let callFunction = () => {
            mapStateToProps({ textChangeReducer: object, formSubmitReducer: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object2 = [{ isLoading: false, isSubmitted: true, error: "invalid choice", payload: "Anas" }, { isLoading: false, isSubmitted: true, error: "error", payload: "Edmond" }, { isLoading: false, isSubmitted: false, error: "error\n", payload: "Pierre Edouard" }]
        let object = [{ username: 123, password: "YouarenotAllowed2Use" }, { username: 123, password: "accessdenied4u" }, { username: "user name", password: "accessdenied4u" }]
        let callFunction = () => {
            mapStateToProps({ textChangeReducer: object, formSubmitReducer: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object2 = [{ isLoading: false, isSubmitted: true, error: "too many arguments", payload: "George" }, { isLoading: false, isSubmitted: true, error: "error\n", payload: "Anas" }, { isLoading: true, isSubmitted: false, error: "Message box: foo; bar\n", payload: "George" }]
        let object = [{ username: 123, password: "$p3onyycat" }, { username: "username", password: "YouarenotAllowed2Use" }, { username: 123, password: "YouarenotAllowed2Use" }]
        let callFunction = () => {
            mapStateToProps({ textChangeReducer: object, formSubmitReducer: object2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps(() => "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps(() => 9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps(() => "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapDispatchToProps(() => "c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapDispatchToProps(() => 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
