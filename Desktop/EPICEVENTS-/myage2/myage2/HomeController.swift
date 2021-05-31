//
//  HomeController.swift
//  myage2
//
//  Created by User on 26/04/2021.
//

import UIKit
import FirebaseAuth
import FirebaseDatabase

class HomeController: UIViewController {

    //Outlets
    @IBOutlet weak var nameLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let user = Auth.auth().currentUser {
            //nameLabel.text = user.email
            let ref = Database.database(url: "https://swift-fd5df-default-rtdb.europe-west1.firebasedatabase.app").reference()
            let userID = Auth.auth().currentUser?.uid
            
            ref.child("users").child(userID!).observeSingleEvent(of: .value){(DataSnapshot) in
                let value = DataSnapshot.value as? NSDictionary
                
                let username = value?["username"] as? String ?? "no username"
                self.nameLabel.text = username
            }
            
        } else {
            fatalError("❌ Erreur : aucun utilisateur est connecté lors de l'affichage de l'écran de l'accueil")
        }

    }
    @IBAction func logoutBtnPressed(_ sender: UIButton) {
        do {
            try Auth.auth().signOut()
            dismiss(animated: true, completion:nil)
        } catch {
            print("Impossible de déconnecter l'utilisateur")
        }
    }
    
}
