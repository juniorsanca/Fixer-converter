//
//  ViewController.swift
//  myage2
//
//  Created by Junior on 26/04/2021.
//

import UIKit
import FirebaseAuth
import FirebaseDatabase

class LoginController: UIViewController {

    //Outlets
    @IBOutlet weak var UsernameTextField: UITextField!
    @IBOutlet weak var PasswordTextField: UITextField!
    @IBOutlet weak var EmailTextField: UITextField!
    
    @IBOutlet weak var signupButton: UIButton!
    @IBOutlet weak var loginButton: UIButton!
    
    
    //Proprieties
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupSignupBtn()
        setupTextFieldManager()
        
        setupEmailField()
        setupEmailTextField()
        setupPasswordTextField()
    }
    
    //Private Actions
    
    private func setupSignupBtn() {
        loginButton.layer.borderWidth = 0
        loginButton.layer.cornerRadius = 10
    }

    private func setupEmailTextField() {
        UsernameTextField.layer.borderWidth = 0
        UsernameTextField.layer.cornerRadius = 20
        UsernameTextField.layer.cornerRadius = UsernameTextField.frame.height * 0.50
    }
    
    private func setupPasswordTextField() {
        PasswordTextField.layer.borderWidth = 0
        PasswordTextField.layer.cornerRadius = 20
        PasswordTextField.layer.cornerRadius = PasswordTextField.frame.height * 0.50
    }
    private func setupEmailField() {
        EmailTextField.layer.borderWidth = 0
        EmailTextField.layer.cornerRadius = 20
        EmailTextField.layer.cornerRadius = EmailTextField.frame.height * 0.50
    }
    
    
    
    private func setupTextFieldManager(){
        UsernameTextField.delegate = self
        PasswordTextField.delegate = self
        EmailTextField.delegate = self
        
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(hideKeyboard))
            view.addGestureRecognizer(tapGesture)
    }
    
    //Actions
    @objc private func hideKeyboard(){
         UsernameTextField.resignFirstResponder()
         PasswordTextField.resignFirstResponder()
         EmailTextField.resignFirstResponder()
     }
    
    @IBAction func signupBtnWasPressed(_ sender: UIButton) {
        if UsernameTextField.text != "" && EmailTextField.text != "" && PasswordTextField.text != "" {
            
            Auth.auth().createUser(withEmail: EmailTextField.text!, password: PasswordTextField.text!) {(authResult, error) in
                
                if error != nil {
                    print(error.debugDescription)
                } else{
                    print("Inscription de \(self.UsernameTextField.text ?? "no nane") réussie ✅")
                    
                    let ref = Database.database(url: "https://swift-fd5df-default-rtdb.europe-west1.firebasedatabase.app").reference()
                    let userID = Auth.auth().currentUser?.uid
                    
                    ref.child("users").child(userID!).setValue(["username" : self.UsernameTextField.text!])
                    
                    self.performSegue(withIdentifier: "goToHome", sender: self)
                }
            }
            
        }else{
            print("Erreur : les champs ne sont pas complets")
        }
    }
    
    @IBAction func loginBtnWasPressed(_ sender: UIButton) {
        print("redirection vers button de login")
    }

}


extension LoginController : UITextFieldDelegate{
    func textFieldShouldReturn( textField: UITextField) -> Bool {
        textField.resignFirstResponder()
            return true
    }
}
