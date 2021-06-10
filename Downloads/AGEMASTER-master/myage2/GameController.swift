//
//  GameController.swift
//  myage2
//
//  Created by User on 07/05/2021.
//

import UIKit
import Photos
import FirebaseAuth
import FirebaseDatabase
import FirebaseStorage
import FirebaseUI

class GameController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    
    @IBOutlet weak var photoView: UIImageView!
    @IBOutlet weak var validBtn: UIButton!
    
    @IBOutlet weak var ansBtn1: UIButton!
    @IBOutlet weak var ansBtn2: UIButton!
    @IBOutlet weak var ansBtn3: UIButton!
    @IBOutlet weak var ansBtn4: UIButton!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        displayPhoto()
        // Do any additional setup after loading the view.
    }
    
    private var imageURL = URL(string: "")
    func displayPhoto(){
        let storage = Storage.storage()
        let storageRef = storage.reference()
        
        let ref = storageRef.child("images/file-00C4F600DFB0.png")
        ref.downloadURL { (url, error) in
            if error != nil {
                print((error?.localizedDescription)!)
                return
                
            }
            self.imageURL = url!

            let task = URLSession.shared.dataTask(with: url!) {(data, response, error) in
                let image: UIImage = UIImage(data: data!)!
                
                print(image)
             }
             task.resume()
        }
        
        
    }
}
