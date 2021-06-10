//
//  LogController.swift
//  myage2
//
//  Created by junior on 26/04/2021.
//

import UIKit
import FirebaseAuth

class LogController: UIViewController {

    //Outlets
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet weak var logBtn: UIButton!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        setupButtons()
        setupEmailTextField()
        setupTextFieldManager()
        setupPasswordTextField()
    }
    
    //Private Actions
    private func setupButtons() {
        logBtn.layer.borderWidth = 0
        logBtn.layer.cornerRadius = 10
    }
    
    private func setupEmailTextField() {
        emailTextField.layer.borderWidth = 0
        emailTextField.layer.cornerRadius = 20
        emailTextField.layer.cornerRadius = emailTextField.frame.height * 0.50
    }
    private func setupPasswordTextField() {
        passwordTextField.layer.borderWidth = 0
        passwordTextField.layer.cornerRadius = 20
        passwordTextField.layer.cornerRadius = passwordTextField.frame.height * 0.50
    }
    
    private func setupTextFieldManager(){
        emailTextField.delegate = self
        passwordTextField.delegate = self
        
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(hideKeyboard))
            view.addGestureRecognizer(tapGesture)
        
    }
    
    //Actions
    @objc private func hideKeyboard(){
        emailTextField.resignFirstResponder()
        passwordTextField.resignFirstResponder()
     }
    
    
    //Actions
    @IBAction func returnToSignupScreen(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
    
    
    @IBAction func logBtnPressed(_ sender: UIButton) {
        Auth.auth().signIn(withEmail: emailTextField.text!, password: passwordTextField.text!) {(authResult, Error)in
            if Error != nil {
                print(Error.debugDescription)
            } else {
                self.performSegue(withIdentifier: "goToHome2", sender: self)
            }
        }
    }
    
}

extension LogController : UITextFieldDelegate{
    func textFieldShouldReturn( textField: UITextField) -> Bool {
        textField.resignFirstResponder()
            return true
    }
}
